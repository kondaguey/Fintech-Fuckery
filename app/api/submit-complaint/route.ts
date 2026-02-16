import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { formData, events, filings } = body;

        // Basic validation
        if (!formData?.firstName || !formData?.email || !formData?.company) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from("fintech_form")
            .insert({
                first_name: formData.firstName,
                last_name: formData.lastName,
                company: formData.company,
                summary: formData.summary,
                email: formData.email,
                social_media_url: formData.socialMediaUrl || null,
                hide_last_name: formData.hideLastName,
                allow_public: formData.allowPublic,
                legal_summary: formData.legalSummary || null,
                damage: formData.damage || null,
                resolution: formData.resolution || null,
                timeline_events: events,
                regulatory_filings: filings.length > 0 ? filings : null,
            })
            .select()
            .single();

        if (error) {
            console.error("Supabase insert error:", error);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data.id });
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
