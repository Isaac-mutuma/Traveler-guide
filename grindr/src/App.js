import React, { useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import cardData from './data/cardData';
import styles from './App.module.css';

const Home = () => (
  <>
    <section>
      <h1>Our Sustainable Products</h1>
      <div className={styles.cardGrid}>
        {cardData.map(card => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>
    <section style={{ margin: '3rem 0' }}>
      <h2>Why Choose Us?</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
      }}>
        <div style={{ flex: '1 1 200px', minWidth: 200, background: 'var(--color-secondary)', padding: 24, borderRadius: 8 }}>
          <h3>Eco-Friendly</h3>
          <p>All our products are made with sustainability in mind, using recycled materials and ethical sourcing.</p>
        </div>
        <div style={{ flex: '1 1 200px', minWidth: 200, background: 'var(--color-secondary)', padding: 24, borderRadius: 8 }}>
          <h3>Global Impact</h3>
          <p>We support communities and reduce carbon footprints worldwide through responsible travel solutions.</p>
        </div>
        <div style={{ flex: '1 1 200px', minWidth: 200, background: 'var(--color-secondary)', padding: 24, borderRadius: 8 }}>
          <h3>Trusted Quality</h3>
          <p>Our products are tested and loved by thousands of travelers and adventure seekers.</p>
        </div>
      </div>
    </section>
    <section style={{ margin: '3rem 0' }}>
      <h2>Customer Testimonials</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
      }}>
        <div style={{ flex: '1 1 250px', minWidth: 220, background: '#fff', color: '#333', padding: 20, borderRadius: 8 }}>
          <p>"RoamReady made my trip to Patagonia unforgettable. The eco-friendly gear was top-notch!"</p>
          <strong>- Alex T.</strong>
        </div>
        <div style={{ flex: '1 1 250px', minWidth: 220, background: '#fff', color: '#333', padding: 20, borderRadius: 8 }}>
          <p>"I love how easy it is to find sustainable products for my travels. Highly recommended!"</p>
          <strong>- Priya S.</strong>
        </div>
      </div>
    </section>
  </>
);

const Products = () => (
  <section>
    <h1>Products</h1>
    <p>
      Discover our curated selection of sustainable travel products, designed to make your journeys eco-friendly and memorable. From reusable essentials to innovative gear, each product is chosen for quality and impact.
    </p>
    <ul>
      <li>Reusable water bottles and coffee cups</li>
      <li>Eco-friendly travel backpacks</li>
      <li>Solar-powered chargers</li>
      <li>Bamboo toothbrushes and toiletries</li>
      <li>Biodegradable travel accessories</li>
    </ul>
    <div className={styles.cardGrid}>
      {cardData.map(card => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  </section>
);

const About = () => (
  <section>
    <h1>About Us</h1>
    <p>
      RoamReady is dedicated to inspiring and equipping travelers to explore the world responsibly. Our mission is to promote sustainable tourism and provide resources for unforgettable adventures.
    </p>
    <ul>
      <li>🌍 Passionate about eco-friendly travel</li>
      <li>✈️ Experienced team of global explorers</li>
      <li>🤝 Supporting local communities</li>
      <li>📚 Sharing travel tips and guides</li>
      <li>💡 Innovating for a greener planet</li>
    </ul>
    <p>
      Founded in 2022, RoamReady has helped thousands of travelers make a positive impact while exploring the globe. Join us on our journey to make travel better for everyone!
    </p>
  </section>
);

const Contact = () => (
  <section>
    <h1>Contact</h1>
    <p>We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 400,
        margin: '0 auto',
      }}
    >
      <input type="text" placeholder="Your Name" required style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
      <input type="email" placeholder="Your Email" required style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
      <textarea placeholder="Your Message" rows={4} required style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
      <button type="submit" style={{ background: 'var(--color-accent)', color: '#fff', border: 'none', padding: 12, borderRadius: 4, fontWeight: 'bold' }}>
        Send
      </button>
    </form>
    <div style={{ marginTop: 32 }}>
      <h3>Contact Information</h3>
      <p>Email: brigid@roamready.com</p>
      <p>Phone: +254 700814515</p>
      <p>Address: 123 Main Street, Roysambu, Nairobi, 00618-00618, Kenya.</p>
    </div>
  </section>
);

const blogPosts = [
  {
    title: "5 Tips for Sustainable Travel: Explore the World Responsibly",
    summary: "Discover how to minimize your environmental impact while exploring new destinations. From packing light to supporting local businesses, these tips will help you travel responsibly, ensuring your adventures contribute positively to the planet and its people.",
    content: (
      <>
        <ul>
          <li>
            <strong>Pack reusable items like water bottles and bags:</strong> Ditch single-use plastics! A reusable water bottle is your best friend, especially when many airports now have refill stations. A sturdy reusable shopping bag (like a foldable tote) means you can avoid plastic bags at markets and souvenir shops. Consider bringing your own reusable cutlery set and coffee cup for even more impact. This simple habit significantly reduces waste, a major contributor to pollution in tourist areas.
          </li>
          <li>
            <strong>Choose eco-friendly accommodations:</strong> Look for hotels, guesthouses, or eco-lodges that have genuine sustainability certifications (e.g., LEED, Green Key, EarthCheck). These places often implement practices like water conservation, energy efficiency, waste reduction, and sourcing local food. Read reviews and check their websites for their environmental policies before booking. Sometimes, even smaller, locally-owned guesthouses without formal certifications can be more sustainable due to their inherent community integration and lower resource consumption compared to large chains.
          </li>
          <li>
            <strong>Support local and ethical businesses:</strong> Your money has power. Prioritize spending at locally-owned restaurants, shops, and tour operators. This ensures your tourism dollars directly benefit the community you're visiting, creating jobs and fostering economic growth. When buying souvenirs, opt for handmade crafts from local artisans over mass-produced imports. Be mindful of ethical considerations, especially when dealing with animal tourism or cultural experiences, ensuring they are respectful and don't exploit local people or wildlife.
          </li>
          <li>
            <strong>Offset your carbon footprint:</strong> Air travel is a significant contributor to carbon emissions. While avoiding flying entirely isn't always feasible, you can mitigate your impact by offsetting your carbon footprint. Many airlines offer this option, or you can use reputable third-party organizations that invest in renewable energy projects, reforestation, or other carbon-reducing initiatives. While not a complete solution, it's a step towards acknowledging and addressing the environmental cost of your journey.
          </li>
          <li>
            <strong>Respect wildlife and natural habitats:</strong> When exploring nature, remember you are a guest. Stick to marked trails to avoid damaging fragile ecosystems. Never feed wild animals, as it can alter their natural behavior and harm their health. Maintain a respectful distance from wildlife. Learn about local conservation efforts and regulations. If visiting marine environments, choose reef-safe sunscreen and avoid touching coral or disturbing marine life. Leave no trace behind – pack out everything you pack in.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Top Destinations for Eco-Adventurers: Where Sustainability Meets Breathtaking Beauty",
    summary: "For the conscious traveler seeking both thrilling experiences and responsible tourism, these destinations stand out. Explore our favorite places around the globe that champion sustainability and offer breathtaking adventures for eco-minded explorers.",
    content: (
      <>
        <ul>
          <li>
            <strong>Patagonia, Argentina:</strong> A vast, wild expanse of mountains, glaciers, and forests, Patagonia is renowned for its protected national parks (like Torres del Paine and Los Glaciares) and a strong emphasis on conservation. Eco-lodges are common, and tour operators often adhere to strict "Leave No Trace" principles. Eco-adventures include trekking to iconic peaks, glacier hiking, wildlife spotting (condors, guanacos, pumas), kayaking through fjords, and exploring pristine wilderness areas with minimal human impact.
          </li>
          <li>
            <strong>Kyoto, Japan:</strong> While a bustling city, Kyoto is deeply rooted in traditional Japanese culture which emphasizes harmony with nature. It has numerous temples, gardens, and bamboo groves that promote tranquility and appreciation for the natural world. Public transport is highly efficient, reducing the need for private vehicles. Many traditional inns (ryokans) and restaurants focus on locally sourced ingredients and sustainable practices. Eco-adventures involve cycling through historic neighborhoods, exploring serene bamboo forests (Arashiyama), visiting ancient temples and gardens, participating in traditional tea ceremonies, and experiencing the city's commitment to preserving cultural and natural heritage.
          </li>
          <li>
            <strong>Banff, Canada:</strong> Located within Banff National Park, a UNESCO World Heritage site, Banff is deeply committed to preserving its stunning mountain environment. Strict regulations are in place to protect wildlife and natural landscapes. The park encourages sustainable tourism through extensive trail networks, public transport options, and educational programs. Eco-adventures include hiking and backpacking in the Canadian Rockies, canoeing on turquoise lakes (Lake Louise, Moraine Lake), wildlife viewing (bears, elk, bighorn sheep) from a safe distance, mountain biking, and exploring vast, untouched wilderness.
          </li>
          <li>
            <strong>Hanoi, Vietnam:</strong> While known for its bustling energy, Hanoi offers numerous opportunities for sustainable engagement. The city encourages cycling and walking, particularly around its many lakes and historic districts. Many local eateries emphasize fresh, seasonal ingredients. Furthermore, responsible tourism initiatives often support local communities and preserve cultural heritage. Eco-adventures involve exploring the Old Quarter on foot or by bicycle, visiting local markets for authentic culinary experiences, taking a traditional cooking class focused on local ingredients, enjoying peaceful moments by Hoan Kiem Lake, and embarking on eco-friendly tours to nearby rural areas or Ha Long Bay (choosing responsible tour operators).
          </li>
          <li>
            <strong>Cape Town, South Africa:</strong> Cape Town is uniquely positioned between stunning mountains and the ocean, leading to significant conservation efforts. It boasts a rich biodiversity hotspot (the Cape Floral Kingdom) and a growing number of eco-conscious initiatives, from water conservation in hotels to community-based tourism projects in townships. Eco-adventures include hiking Table Mountain, exploring the Kirstenbosch National Botanical Garden, cage diving with sharks (with responsible operators), exploring the Cape Point nature reserve, visiting ethical wildlife sanctuaries, and engaging with community tourism initiatives that directly benefit local residents.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "The Art of Minimalist Travel: How to Pack Light for Any Trip",
    summary: "Packing light is an art form that transforms your travel experience. Learn how to choose versatile clothing, minimize toiletries, and cleverly use packing cubes to save space, reduce stress, and lighten your environmental footprint.",
    content: (
      <>
        <ul>
          <li>
            <strong>Choose versatile clothing:</strong> Think multi-functional items. Pack neutral colors that can be easily mixed and matched. Layering is key – a light jacket, a few versatile tops, and one or two bottoms can create many different outfits. Opt for quick-drying fabrics that are wrinkle-resistant. Before packing, lay out your chosen clothes and try to create at least 3-4 different outfits from each top and bottom combination.
          </li>
          <li>
            <strong>Minimize toiletries:</strong> Decant your favorite products into travel-sized reusable containers. Consider solid toiletries like shampoo bars, conditioner bars, and solid toothpaste, which are compact, leak-proof, and often plastic-free. Don't pack items that most accommodations provide (shampoo, soap) unless you have specific preferences or allergies. A small first-aid kit with essentials is good, but skip the "just in case" large bottles.
          </li>
          <li>
            <strong>Use packing cubes to save space and reduce your travel footprint:</strong> Packing cubes are game-changers! They compress your clothes, keep them organized, and make it easy to find what you need without rummaging. Roll your clothes tightly before placing them in cubes for maximum space efficiency. This organization also helps you avoid overpacking, as you can clearly see how much space you have. Less luggage means potentially less fuel consumption during transport and easier navigation for you.
          </li>
          <li>
            <strong>Embrace the "Rule of Three":</strong> For many items (underwear, socks, t-shirts), consider packing three: one to wear, one to wash, and one to dry. You can do laundry on the go.
          </li>
          <li>
            <strong>Wear your bulkiest items:</strong> If you're bringing a heavy coat or boots, wear them on the plane or train instead of packing them.
          </li>
          <li>
            <strong>Digitize documents and entertainment:</strong> Store all your travel documents on your phone or in a cloud service. Download books, movies, and music beforehand to avoid carrying physical copies.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Power Up Sustainably: Best Solar Gadgets for Eco-Conscious Travelers",
    summary: "Stay powered up on the go with our top picks for solar chargers, lanterns, and other eco-friendly tech essentials. These innovative gadgets harness the sun's energy, ensuring you remain connected and illuminated without relying on grid power, perfect for your next adventure.",
    content: (
      <>
        <ul>
          <li>
            <strong>Solar chargers (portable power banks with solar panels):</strong> These are absolute must-haves for adventurers. Look for models with a large internal battery capacity and efficient, fold-out solar panels. They allow you to charge your phone, camera, and other small devices even when off-grid, ensuring you don't miss capturing those breathtaking moments or navigating new trails. Prioritize models with a high IPX rating for water and dust resistance.
          </li>
          <li>
            <strong>Solar lanterns:</strong> Ditch the batteries! Solar lanterns are perfect for camping, illuminating your tent, or providing ambient light in remote areas. Many are inflatable or collapsible, making them extremely lightweight and compact. Some even double as charging stations for small devices. They offer a sustainable and reliable light source for evenings under the stars.
          </li>
          <li>
            <strong>Other eco-friendly tech essentials:</strong>
            <ul>
              <li>Solar-powered watches: Many outdoor watches now feature solar charging, eliminating the need for frequent battery replacements.</li>
              <li>Hand-crank/solar radios: Essential for emergencies or getting news updates in remote areas without relying on power outlets.</li>
              <li>Portable water filters (some with UV light purification): While not solar-powered themselves, combining them with solar chargers for UV purification models ensures you have access to safe drinking water without buying single-use plastic bottles.</li>
              <li>Compact portable speakers with solar charging: Enjoy your favorite tunes responsibly, whether at the campsite or a scenic overlook.</li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>Tips for using solar gadgets:</strong>
          <ul>
            <li>Expose panels to direct sunlight whenever possible, not just ambient light.</li>
            <li>Angle panels correctly for maximum efficiency.</li>
            <li>Charge internal batteries whenever you have a chance, even if only partially, as backup.</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title: "Embrace the Journey: Why Every Traveler Should Try Slow Travel",
    summary: "Slow travel isn't just a trend; it's a transformative philosophy. It's about immersing yourself in local culture, spending more time in fewer places, and making meaningful connections. Discover the profound benefits and learn how to get started on a more enriching and sustainable travel path.",
    content: (
      <>
        <ul>
          <li>
            <strong>Immersing yourself in local culture:</strong> Instead of rushing from one landmark to another, slow travel encourages you to linger. This allows you to observe daily life, participate in local customs, learn a few phrases of the language, and truly understand the rhythm of a place. You might stumble upon a local festival, spend an afternoon chatting with a shopkeeper, or discover hidden gems far from the tourist crowds. This deeper engagement fosters greater appreciation and understanding.
          </li>
          <li>
            <strong>Spending more time in fewer places:</strong> Quality over quantity is the mantra of slow travel. Instead of visiting 5 cities in 7 days, pick one or two destinations and spend a week or more in each. This reduces travel fatigue, allows you to unpack and settle in, and gives you time to explore beyond the main attractions. It also inherently reduces your carbon footprint from less transit.
          </li>
          <li>
            <strong>Making meaningful connections:</strong> When you slow down, you create opportunities for genuine interactions. This could be with locals, fellow travelers you meet in a guesthouse, or even through volunteering. These connections often lead to richer experiences, insider tips, and lasting memories that go beyond postcard views. You become a part of the place, not just a passing observer.
          </li>
        </ul>
        <p>
          <strong>Discover the benefits:</strong>
          <ul>
            <li>Reduced stress and burnout: No more rushing, frantic itineraries, or feeling like you need a vacation from your vacation. Slow travel is inherently more relaxing.</li>
            <li>Deeper understanding: You gain a more nuanced perspective of the culture, history, and people of a place.</li>
            <li>Increased sustainability: Less moving around means less fuel consumption, and supporting local businesses for longer periods contributes more to the local economy.</li>
            <li>Uncover hidden gems: You have the time to explore off the beaten path, discover local favorites, and find unique experiences.</li>
            <li>Cost savings: Often, staying longer in one place can be more economical (e.g., weekly accommodation rates, cooking some meals).</li>
          </ul>
        </p>
        <p>
          <strong>How to get started:</strong>
          <ul>
            <li>Rethink your itinerary: Instead of a checklist of sights, focus on experiences.</li>
            <li>Consider longer stays: Look into renting an apartment or house for a week or more.</li>
            <li>Utilize public transport: Take trains, buses, or walk/cycle to truly experience the journey.</li>
            <li>Embrace spontaneity: Leave room in your schedule for unplanned adventures.</li>
            <li>Connect with locals: Use apps, local events, or simply strike up conversations.</li>
            <li>Try house sitting or volunteering: These options offer extended stays and deep local immersion.</li>
          </ul>
        </p>
      </>
    ),
  },
];

const Blog = () => {
  const [expanded, setExpanded] = useState(Array(blogPosts.length).fill(false));

  const handleReadMore = idx => {
    setExpanded(expanded =>
      expanded.map((val, i) => (i === idx ? !val : val))
    );
  };

  return (
    <section>
      <h1>Blog</h1>
      <div
        style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: '1fr',
        }}
      >
        {blogPosts.map((post, idx) => (
          <div
            key={post.title}
            style={{
              background: '#fff',
              color: '#333',
              borderRadius: 8,
              padding: 24,
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h2 style={{ color: 'var(--color-primary)' }}>{post.title}</h2>
            <p>{post.summary}</p>
            {expanded[idx] && (
              <div style={{ marginTop: 16 }}>{post.content}</div>
            )}
            <button
              style={{
                marginTop: 16,
                alignSelf: 'flex-start',
                background: 'var(--color-accent)',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: 4,
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={() => handleReadMore(idx)}
            >
              {expanded[idx] ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const PAGES = {
  Home: <Home />,
  Products: <Products />,
  'About Us': <About />,
  Contact: <Contact />,
  Blog: <Blog />,
};

function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className={styles.app}>
      <Header setPage={setPage} currentPage={page} />
      <main>
        <div className={styles.container}>
          {PAGES[page]}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;