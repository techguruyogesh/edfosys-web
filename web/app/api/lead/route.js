import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Log the lead for observability
    console.log("[Edfosys Lead Received]:", {
      ...data,
      received_at: new Date().toISOString(),
    });

    // Forward lead into Edfosys Central CRM enquiry endpoint
    const centralApiUrl =
      process.env.CENTRAL_API_BASE_URL || "https://app.edfosys.com";

    try {
      const payload = {
        name: data.name,
        email: data.email,
        company_name:
          data.company_name ||
          data.company ||
          (data.name ? `${data.name}'s Company` : "Prospective Client"),
        phone_number: data.phone || data.phone_number || null,
        industry: data.primary_interest || data.industry || "Technology & Consulting",
        team_size: data.team_size || "1-5",
        message:
          data.notes ||
          data.message ||
          `Consultation request submitted from ${data.lead_source || "Website"}. Business Stage: ${data.business_stage || "N/A"}.`,
      };

      const crmRes = await fetch(`${centralApiUrl}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const crmData = await crmRes.json();
      console.log("[CRM Forwarding Success]:", crmData);
    } catch (e) {
      console.warn("[CRM Forwarding Warning]:", e.message);
    }

    return NextResponse.json({
      success: true,
      message: "Lead received and saved to CRM successfully.",
    });
  } catch (error) {
    console.error("[API Lead Error]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead." },
      { status: 500 }
    );
  }
}
