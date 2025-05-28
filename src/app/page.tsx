import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-bakery-100 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center text-black px-4 flex flex-col items-center justify-center">
            <Image
              src="/images/logos/logo-full-color.PNG"
              alt="Missy Bakes Logo"
              width={400}
              height={300}
              className="p-4"
              priority
            />
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link
                href="/menu"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold rubik"
              >
                View Our Menu
              </Link>
              <Link
                href="/order"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold rubik"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
