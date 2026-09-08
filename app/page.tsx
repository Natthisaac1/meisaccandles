import Link from "next/link";
import { CandleImage } from "@/components/CandleImage";
import { ProductCard } from "@/components/ProductCard";
import { aromaLabels, products, type Aroma } from "@/lib/products";

const families: { aroma: Aroma; line: string }[] = [
  { aroma: "floral", line: "Jazmín, rosa, guayusa. Flores de altura y de valle." },
  { aroma: "amaderado", line: "Cedro, eucalipto, musgo. El bosque sin la leña." },
  { aroma: "cítrico", line: "Naranja, sal, bergamota. Aire de costa." },
  { aroma: "dulce", line: "Cacao, miel, vainilla. Calma, no azúcar." }
];

export default function HomePage() {
  const featured = products.filter((product) => product.featured);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <p className="text-[11px] uppercase tracking-brand text-amberDeep">MeisacCandles</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-charcoal md:text-7xl">
            Velas de soya.
            <span className="block italic text-amberDeep">Ecuador.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            Cera de soya, mecha de algodón y aromas pensados para casas quietas.
            Lotes pequeños. Precios en dólares. Envío en 2–5 días.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/tienda" className="bg-charcoal px-6 py-4 text-sm uppercase tracking-brand text-cream">
              Ver la tienda
            </Link>
            <Link
              href="/tienda?aroma=floral"
              className="border border-charcoal/20 px-6 py-4 text-sm uppercase tracking-brand text-charcoal"
            >
              Familia floral
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <CandleImage
            src="/products/hero.jpg"
            alt="Vela de soya MeisacCandles encendida"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-charcoal md:text-4xl">Selección</h2>
          <Link href="/tienda" className="text-sm uppercase tracking-brand text-charcoal/60">
            Todas
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-sand/60">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <h2 className="font-serif text-3xl text-charcoal md:text-4xl">Familias de aroma</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {families.map((family) => (
              <Link
                key={family.aroma}
                href={`/tienda?aroma=${encodeURIComponent(family.aroma)}`}
                className="border border-charcoal/10 bg-cream p-6 transition hover:border-amber"
              >
                <p className="text-[11px] uppercase tracking-brand text-amberDeep">
                  {aromaLabels[family.aroma]}
                </p>
                <p className="mt-3 font-serif text-2xl text-charcoal">{aromaLabels[family.aroma]}</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{family.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <h2 className="font-serif text-3xl text-charcoal md:text-4xl">Cómo funciona</h2>
          <ol className="mt-8 space-y-6">
            {[
              ["01", "Elige", "Filtra por aroma y formato. Cada vela indica horas de quema y tamaño."],
              ["02", "Pide", "Deja tu nombre, teléfono y dirección. Es un pedido de demostración, sin cobro."],
              ["03", "Te escribimos", "Una persona confirma el pedido y coordina el envío."]
            ].map(([step, title, text]) => (
              <li key={step} className="grid grid-cols-[3rem_1fr] gap-3">
                <span className="font-serif text-2xl text-amber">{step}</span>
                <div>
                  <p className="font-serif text-xl">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-charcoal px-7 py-10 text-cream">
          <p className="text-[11px] uppercase tracking-brand text-amber">Envíos en Ecuador</p>
          <h2 className="mt-3 font-serif text-4xl">2–5 días</h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            Salimos desde Quito a Guayaquil, Cuenca, Ambato, Manta y el resto del país.
            Días hábiles. El tarro y el vaso viajan con protección; el pilar, bien embalado.
          </p>
          <p className="mt-6 text-sm text-cream/60">Precios en USD. Cera de soya. Mecha de algodón.</p>
        </div>
      </section>
    </>
  );
}
