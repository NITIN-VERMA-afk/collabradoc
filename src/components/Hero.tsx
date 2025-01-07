import { Button } from './ui/button'
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Collaborate in Real-Time
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Edit documents together, see changes as they happen, and work seamlessly with your team from anywhere in the world.
          </p>
          <div className="mt-10 sm:flex">
            <div className="rounded-md shadow">
              <Button size="lg">Get Started</Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img className="w-full h-auto rounded-lg shadow-xl" src="img/logo.jpg" alt="Collaborative editing in action" />
        </div>
      </div>
    </div>
  )
}

export default Hero