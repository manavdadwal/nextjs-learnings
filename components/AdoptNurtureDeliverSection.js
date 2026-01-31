export default function AdoptNurtureDeliverSection() {
  const words = [
    { text: 'ADOPT', style: 'outline' },
    { text: 'NURTURE', style: 'filled' },
    { text: 'DELIVER', style: 'outline' },
    { text: 'ADOPT', style: 'outline' },
    { text: 'NURTURE', style: 'filled' },
    { text: 'DELIVER', style: 'outline' },
  ]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="flex items-center justify-center gap-4 whitespace-nowrap">
        {words.map((word, index) => (
          <div key={index} className="flex items-center gap-4">
            <span
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide ${
                word.style === 'filled'
                  ? 'text-[#B4D335]'
                  : 'text-transparent bg-clip-text'
              }`}
              style={{
                fontFamily: 'Matter, sans-serif',
                ...(word.style === 'outline' && {
                  WebkitTextStroke: '2px #B4D335',
                }),
              }}
            >
              {word.text}
            </span>
            {index < words.length - 1 && (
              <span className="text-[#B4D335] text-4xl md:text-5xl lg:text-6xl font-bold">•</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
