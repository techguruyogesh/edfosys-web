import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Log the lead for observability
    console.log("[Edfosys Lead Received]:", {
      ...data,
      received_at: new Date().toISOString(),
    });

    // Optionally forward lead into Edfosys Central CRM enquiry endpoint
    const centralApiUrl =
      process.env.CENTRAL_API_BASE_URL || "https://app.edfosys.com";

    try {
      await fetch(`${centralApiUrl}/api/v1/central/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.notes || "Free Consulting Lead",
          industry: data.primary_interest || "general",
          source: data.lead_source || "Edfosys Website",
        }),
      });
    } catch (e) {
      console.warn("[CRM Forwarding Warning]:", e.message);
    }

    return NextResponse.json({
      success: true,
      message: "Lead received successfully.",
    });
  } catch (error) {
    console.error("[API Lead Error]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead." },
      { status: 500 }
    );
  }
}
