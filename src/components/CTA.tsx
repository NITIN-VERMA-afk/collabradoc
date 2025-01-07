import { Button } from './ui/button'

const CTA = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start collaborating today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Join thousands of teams already using CollabEdit to streamline their workflow and boost productivity.
        </p>
        <Button size="lg" variant="secondary" className="mt-8">
          Get started for free
        </Button>
      </div>
    </div>
  )
}

export default CTA