import Image from 'next/image'

export function Logo({ className, ...props }) {
  return (
    <Image
              src="/logo-1.jpeg"
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              width={62} height={62}
            />
  )
}
