
export default function BenefitsComponent() {
    return (
      <div className="bg-white p-24 max-w-7xl w-full rounded-lg">
        <h2 className="text-3xl font-semibold mb-10 text-black text-center">Benefits of your Loan</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#D9F7E9] p-4 rounded-lg">
              <DollarSignIcon className="text-[#34D399] w-6 h-6" />
            </div>
            <div className="text-black">
              <h3 className="font-semibold">TCEA desde 12%</h3>
              <p>We offer you a competitive rate and personalized based on your assessment.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#D9F7E9] p-4 rounded-lg">
              <CalendarIcon className="text-[#34D399] w-6 h-6" />
            </div>
            <div className="text-black">
              <h3 className="font-semibold">Payment Deadline</h3>
              <p>You can cancel your loan when you want.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#D9F7E9] p-4 rounded-lg">
              <RulerIcon className="text-[#34D399] w-6 h-6" />
            </div>
            <div className="text-black">
              <h3 className="font-semibold">Customized Schedules</h3>
              <p>You can choose as you wish amortize the capital during the loan period.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#D9F7E9] p-4 rounded-lg">
              <FastForwardIcon className="text-[#34D399] w-6 h-6" />
            </div>
            <div className="text-black">
              <h3 className="font-semibold">Fast Disbursement</h3>
              <p>On average 15 business days from the delivery of the documents.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#D9F7E9] p-4 rounded-lg">
              <UserIcon className="text-[#34D399] w-6 h-6" />
            </div>
            <div className="text-black">
              <h3 className="font-semibold">Personalized advice</h3>
              <p>You will have an advisor staff throughout the process.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#D9F7E9] p-4 rounded-lg">
              <BarChartIcon className="text-[#34D399] w-6 h-6" />
            </div>
            <div className="text-black">
              <h3 className="font-semibold">Maximum Amount</h3>
              <p>We can lend you up to 40% of the value of your collateral in function to your record.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function BarChartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    )
  }
  
  
  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function DollarSignIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
  
  
  function FastForwardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 19 22 12 13 5 13 19" />
        <polygon points="2 19 11 12 2 5 2 19" />
      </svg>
    )
  }
  
  
  function RulerIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
        <path d="m14.5 12.5 2-2" />
        <path d="m11.5 9.5 2-2" />
        <path d="m8.5 6.5 2-2" />
        <path d="m17.5 15.5 2-2" />
      </svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }