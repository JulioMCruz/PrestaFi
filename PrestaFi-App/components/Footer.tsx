export default function FooterSection() {
    return (
      <footer className="bg-gradient-to-b from-[#c1c6d0] via-[#f5f6f7] to-[#c1c6d0] py-24 w-full">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl text-gray-700">© 2024 PrestaFi. All rights reserved</div>
          <div className="text-right">
            <p className="text-xl font-semibold text-gray-700">Contact</p>
            <p className="text-xl text-gray-700">+1-123-456-7890.</p>
            <p className="text-xl text-gray-700">support@PrestaFi.xyz</p>
          </div>
        </div>
      </footer>
    )
  }
