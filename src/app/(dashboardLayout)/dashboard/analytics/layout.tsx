import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AnalyticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/dashboard/analytics/weekly">
            Weekly
          </Link>
        </Button>

        <Button asChild>
          <Link href="/dashboard/analytics/monthly">
            Monthly
          </Link>
        </Button>
      </div>

      {children}
    </div>
  );
}
