import React from 'react'

type CardProps = {
  imageSrc: any,
  cardText: string
}

export function Card({ imageSrc, cardText }: CardProps) {
	return (
    <div className="p-4">
      <div className="h-full bg-magenta100 bg-opacity-75 mx-8 p-10 rounded-lg overflow-hidden text-center relative">
        <img src={imageSrc} className="md:h-48" width='300rem' alt="IPv6 Präfix-Units" />
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 text-2xl ">							
          {cardText}
        </div>
      </div>
    </div>
	)
}

export default Card
