
import { Button } from "@/components/ui/button"

export default function HowWorksComponent() {
  return (
    <div className="bg-[#f0fdf4] p-12 max-w-7xl w-full rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-10">Why do you want to Save?</h2>
      <div className="flex justify-between">
        <div className="max-w-sm rounded-lg border border-[#34d399] p-6 m-2">
          <img src="/Save.png" alt="Entrepreneur" className="mb-6" />
          <h3 className="text-2xl font-bold text-[#059669] mb-4">Help a Entrepreneur</h3>
          <p className="text-gray-600 mb-6">Fast and safe working capital to promote your projects.</p>
          {/* <Button variant="outline" className="text-[#059669] border-[#059669]">
            Do it
          </Button> */}
        </div>
        <div className="max-w-sm rounded-lg border border-[#34d399] p-6 m-2">
          <img src="/Construction.png" alt="Construction" className="mb-6" />
          <h3 className="text-2xl font-bold text-[#059669] mb-4">Construction</h3>
          <p className="text-gray-600 mb-6">Complete your house project dreamed of in an easy way.</p>
          {/* <Button variant="outline" className="text-[#059669] border-[#059669]">
            Do it
          </Button> */}
        </div>
        <div className="max-w-sm rounded-lg border border-[#34d399] p-6 m-2">
          <img src="/Consolidate.png" alt="Consolidate debts" className="mb-6" />
          <h3 className="text-2xl font-bold text-[#059669] mb-4">Consolidate debts</h3>
          <p className="text-gray-600 mb-6">Unify and control your debts quickly and safely.</p>
          {/* <Button variant="outline" className="text-[#059669] border-[#059669]">
            Do it
          </Button> */}
        </div>
      </div>
    </div>
  )
}

