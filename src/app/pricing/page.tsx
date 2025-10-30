import PricingTable from "@/components/PricingTable";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function PricingPage() {
  return (
    <div className="section">
      <div className="card p-8">
        <PricingTable />
      </div>
    </div>
  );
}
