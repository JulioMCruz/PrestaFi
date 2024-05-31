
import { Button } from "@/components/ui/button"
import { ResponsiveBar } from '@nivo/bar'
import { JSX, ClassAttributes, HTMLAttributes } from "react"

export default function PaymentComponent() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">You choose saving for</h2>
        <p className="text-xl font-bold text-gray-900">$1,200 USD</p>
      </div>
      <div className="mb-6">
        <BarChart className="w-full h-[200px]" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">This month I will pay</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-gray-900">$1,000 USD</span>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay</Button>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">Como mínimo paga $100 o más</p>
      </div>
    </div>
  )
}

function BarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}