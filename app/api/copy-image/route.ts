export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ success: true, message: "Images managed statically" });
}
