import Image from "next/image";

export default function Order() {
  return (
    <div className="min-h-screen py-16 bg-bakery-50">
      <div className="container mx-auto px-4">
        <div className="text-center text-black px-4 mb-12">
          <h1 className="text-3xl font-bold mb-4">Place Your Order</h1>
          <p className="text-xl mb-8">
            Fill out the form below to place your order
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bakery-500 focus:border-bakery-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bakery-500 focus:border-bakery-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bakery-500 focus:border-bakery-500"
              />
            </div>

            <div>
              <label htmlFor="item" className="block text-sm font-medium text-gray-700 mb-1">
                Item Name
              </label>
              <input
                type="text"
                id="item"
                name="item"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bakery-500 focus:border-bakery-500"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bakery-500 focus:border-bakery-500"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Special Instructions
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bakery-500 focus:border-bakery-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-bakery-900 text-white py-3 px-6 rounded-lg hover:bg-bakery-800 transition-colors font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
