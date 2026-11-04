import { useState } from 'react';
import {
  ArrowRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Star,
  X,
} from 'lucide-react';

const menuCategories = [
  {
    number: '01',
    title: 'Lunch Special',
    description: 'Served with pork fried rice or white rice. (Mon-Fri 11:00 AM - 3:00 PM)',
    items: [
      ['Chicken Chow Mein', ''],
      ['Shrimp with Lobster Sauce', ''],
      ['Beef with Broccoli', ''],
      ['Roast Pork Egg Foo Young', ''],
      ['General Tso\'s Chicken', ''],
      ['Sweet and Sour Chicken', ''],
    ],
  },
  {
    number: '02',
    title: 'Special Dishes',
    description: 'House favorites from the wok.',
    items: [
      ['House Special Lo Mein', ''],
      ['Seafood Delight', ''],
      ['Happy Family', ''],
      ['Four Seasons', ''],
      ['General Tso\'s Chicken', 'spicy'],
      ['Sesame Chicken', ''],
    ],
  },
  {
    number: '03',
    title: 'Appetizers',
    description: 'Crispy and savory starters.',
    items: [
      ['Egg Roll (1)', ''],
      ['Spring Roll (2)', ''],
      ['Boneless Spare Ribs', ''],
      ['Crab Rangoon (6)', ''],
      ['Dumplings (6)', 'steamed or fried'],
      ['Buffalo Wings', ''],
    ],
  },
  {
    number: '04',
    title: 'Egg Foo Young',
    description: 'Chinese omelette served with brown gravy.',
    items: [
      ['Roast Pork Egg Foo Young', ''],
      ['Chicken Egg Foo Young', ''],
      ['Beef Egg Foo Young', ''],
      ['Shrimp Egg Foo Young', ''],
      ['Vegetable Egg Foo Young', ''],
      ['House Special Egg Foo Young', ''],
    ],
  },
  {
    number: '05',
    title: 'Chef\'s Specialties',
    description: 'Signature dishes prepared with care.',
    items: [
      ['General Tso\'s Chicken', 'spicy'],
      ['Sesame Chicken', ''],
      ['Orange Chicken', 'spicy'],
      ['Hunan Chicken', 'spicy'],
      ['Szechuan Beef', 'spicy'],
      ['Crispy Orange Beef', 'spicy'],
    ],
  },
  {
    number: '06',
    title: 'Soup & Sweet & Sour',
    description: 'Warm bowls and classic sweet and sour.',
    items: [
      ['Wonton Soup', ''],
      ['Egg Drop Soup', ''],
      ['Hot and Sour Soup', 'spicy'],
      ['Chicken Noodle Soup', ''],
      ['Sweet and Sour Pork', ''],
      ['Sweet and Sour Chicken', ''],
      ['Sweet and Sour Shrimp', ''],
    ],
  },
  {
    number: '07',
    title: 'Fried Rice & Lo Mein',
    description: 'Wok-tossed rice and noodles.',
    items: [
      ['Roast Pork Fried Rice', ''],
      ['Chicken Fried Rice', ''],
      ['Beef Fried Rice', ''],
      ['Shrimp Fried Rice', ''],
      ['House Special Fried Rice', ''],
      ['Vegetable Lo Mein', ''],
      ['Roast Pork Lo Mein', ''],
      ['Chicken Lo Mein', ''],
      ['Beef Lo Mein', ''],
      ['Shrimp Lo Mein', ''],
      ['House Special Lo Mein', ''],
    ],
  },
  {
    number: '08',
    title: 'Chow Mein & Chop Suey',
    description: 'Classic Chinese-American favorites.',
    items: [
      ['Chicken Chow Mein', ''],
      ['Roast Pork Chow Mein', ''],
      ['Beef Chow Mein', ''],
      ['Shrimp Chow Mein', ''],
      ['Vegetable Chop Suey', ''],
      ['Chicken Chop Suey', ''],
      ['Roast Pork Chop Suey', ''],
      ['Beef Chop Suey', ''],
      ['Shrimp Chop Suey', ''],
    ],
  },
  {
    number: '09',
    title: 'Chicken & Beef',
    description: 'Served with white rice.',
    items: [
      ['Chicken with Broccoli', ''],
      ['Moo Goo Gai Pan', ''],
      ['Chicken with Cashew Nuts', ''],
      ['Kung Po Chicken', 'spicy'],
      ['Beef with Broccoli', ''],
      ['Pepper Steak with Onion', ''],
      ['Beef with Mushroom', ''],
      ['Hunan Beef', 'spicy'],
    ],
  },
  {
    number: '10',
    title: 'Seafood',
    description: 'Fresh from the sea to the wok.',
    items: [
      ['Shrimp with Broccoli', ''],
      ['Shrimp with Lobster Sauce', ''],
      ['Kung Po Shrimp', 'spicy'],
      ['Szechuan Shrimp', 'spicy'],
      ['Shrimp with Cashew Nuts', ''],
      ['Seafood Combination', ''],
    ],
  },
  {
    number: '11',
    title: 'Combination Platters',
    description: 'Served with pork fried rice and an egg roll.',
    items: [
      ['C1. Chicken Chow Mein', ''],
      ['C2. Shrimp with Chinese Vegetables', ''],
      ['C3. Pepper Steak with Onion', ''],
      ['C4. Roast Pork with Broccoli', ''],
      ['C5. Boneless Spare Ribs', ''],
      ['C6. General Tso\'s Chicken', ''],
      ['C7. Sesame Chicken', ''],
      ['C8. Beef with Broccoli', ''],
    ],
  },
  {
    number: '12',
    title: 'Diet Menu',
    description: 'Steamed dishes with sauce on the side. Served with white rice.',
    items: [
      ['D1. Steamed Mixed Vegetables', ''],
      ['D2. Steamed Chicken with Broccoli', ''],
      ['D3. Steamed Chicken with Mixed Vegetables', ''],
      ['D4. Steamed Beef with Broccoli', ''],
      ['D5. Steamed Shrimp with Broccoli', ''],
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-stone-50 text-stone-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-red-900/20 bg-red-950/95 text-white shadow-lg backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" onClick={closeMenu} className="group flex shrink-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/50 text-yellow-500">
              <Star size={17} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span className="font-display text-[16px] leading-[0.95] tracking-tight sm:text-[18px]">
              Great <span className="text-yellow-500">Wall</span>
            </span>
          </a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[76px] flex-col gap-1 border-b border-red-900/20 bg-red-950 px-5 py-5 sm:px-8 lg:static lg:flex lg:flex-row lg:items-center lg:gap-9 lg:border-0 lg:bg-transparent lg:p-0`}>
            {['Menu', 'About', 'Location'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="border-b border-red-900/20 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white/75 hover:text-yellow-500 lg:border-0 lg:py-2">
                {item}
              </a>
            ))}
            <a href="tel:+12014331388" onClick={closeMenu} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-red-700 px-5 py-3 text-sm font-bold uppercase text-white hover:bg-red-800 lg:mt-0">
              <Phone size={15} /> Call to Order
            </a>
          </nav>
          <button className="rounded-md p-2 text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-end bg-stone-100 pt-[76px] text-stone-900">
          
          {/* HERO IMAGE */}
          <img 
            src="/interior.jpg" 
            alt="Great Wall interior" 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
          />

          <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-stone-100 via-stone-100/95 to-transparent lg:right-[28%]" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-stone-100 to-transparent" />
          
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
            <div className="max-w-3xl animate-rise drop-shadow-md">
              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-red-800"><span className="h-px w-10 bg-red-800" /> Jersey City Heights</div>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[92px]">Authentic Chinese <em className="text-red-800">Cuisine</em></h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-700 font-medium sm:text-xl">Classic wok-tossed dishes, fresh ingredients, and generous portions.</p>
              <a href="#menu" className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-700 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-xl hover:-translate-y-1 hover:bg-red-800">View Menu <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="menu" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div><p className="eyebrow text-red-800">Good food, no fuss</p><h2 className="section-title text-stone-900">The <em>menu</em></h2></div>
              
              <div className="max-w-sm rounded-lg bg-red-50 border-l-4 border-red-700 p-5 text-sm leading-relaxed text-stone-800 font-semibold shadow-sm">
                <p>Prices available in-store or by phone.</p>
                <p className="text-xs mt-1 text-stone-600">Call us for current pricing.</p>
              </div>

            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {menuCategories.map((category) => (
                <article key={category.title} className="menu-card group bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                  <div className="flex items-start justify-between gap-4"><span className="font-display text-4xl text-red-700/25 group-hover:text-red-700/60">{category.number}</span><span className="mt-2 h-2 w-2 rounded-full bg-yellow-500" /></div>
                  <h3 className="mt-5 max-w-sm font-display text-3xl leading-none text-stone-900">{category.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-500">{category.description}</p>
                  <div className="my-6 h-px bg-stone-200" />
                  <ul className="space-y-4">
                    {category.items.map(([name, description]) => <li key={name} className="flex items-baseline justify-between gap-4"><span className="text-[15px] font-semibold text-stone-800">{name}</span><span className="flex-1 border-b border-dotted border-stone-300" /><span className="text-[11px] text-stone-500">{description}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-red-50 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <div><p className="eyebrow text-red-800">A neighborhood staple</p><h2 className="section-title text-stone-900">Made for <em>the community</em></h2><div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-stone-700"><p>Great Wall has been serving the Jersey City community with authentic Chinese cuisine.</p><p>We combine traditional family recipes with fresh, high-quality ingredients to bring you the best Chinese food in the Heights.</p><p>Whether you're grabbing a quick lunch special or ordering dinner for the family, we cook every dish to order.</p></div><div className="mt-9 flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white"><Star size={19} fill="currentColor" /></span><div><p className="font-display text-lg text-stone-900">Great Wall</p><p className="text-xs uppercase tracking-[0.16em] text-stone-500">Jersey City, NJ</p></div></div></div>
            
            {/* ABOUT SECTION IMAGE */}
            <img 
              src="/food.jpg" 
              alt="Chinese food" 
              className="w-full aspect-[4/3] min-h-[360px] lg:min-h-[520px] object-cover rounded-lg shadow-md" 
            />

          </div>
        </section>

        <section id="location" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32 bg-white">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:gap-24">
            <div><p className="eyebrow text-red-800">Come on over</p><h2 className="section-title text-stone-900">Find <em>Us</em></h2><div className="mt-10 space-y-7"><div className="contact-row"><MapPin className="text-red-700" size={21} /><div><p className="label text-stone-500">Address</p><p className="text-stone-900">426 Grand St<br />Jersey City, NJ 07302</p></div></div><div className="contact-row"><Phone className="text-red-700" size={21} /><div><p className="label text-stone-500">Phone</p><a href="tel:+12014331388" className="text-stone-900 hover:text-red-700">(201) 433-1388</a></div></div><div className="contact-row"><Clock3 className="text-red-700" size={21} /><div><p className="label text-stone-500">Hours</p><p className="text-stone-900">Mon–Thu: 11:00 AM – 10:30 PM<br/>Fri–Sat: 11:00 AM – 11:30 PM<br/>Sunday: Closed</p></div></div></div><a href="tel:+12014331388" className="mt-10 inline-flex items-center gap-3 border-b-2 border-red-700 pb-2 text-sm font-bold uppercase tracking-[0.15em] text-red-700 hover:gap-5">Call ahead <ArrowRight size={16} /></a></div>
            
            {/* MAP IFRAME PLACEHOLDER */}
            <div className="relative w-full min-h-[450px] rounded-lg overflow-hidden shadow-md border border-stone-200 bg-stone-100 flex items-center justify-center">
               <span className="text-stone-500 font-semibold uppercase tracking-widest text-sm">[ GOOGLE MAPS EMBED PLACEHOLDER ]</span>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-stone-900 px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"><p className="font-display text-lg">Great <span className="text-yellow-500">Wall</span></p><p className="text-xs tracking-wide text-stone-400">© 2024 Great Wall Restaurant. Jersey City, NJ.</p><div className="flex gap-3"><a href="#top" aria-label="Instagram" className="social-icon"><Instagram size={17} /></a><a href="#top" aria-label="Facebook" className="social-icon"><Facebook size={17} /></a></div></div></footer>
    </div>
  );
}

export default App;
