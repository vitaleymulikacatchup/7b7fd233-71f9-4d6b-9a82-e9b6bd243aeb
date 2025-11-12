"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Star, Coffee, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Starbucks"
          button={{
            text: "Find a Store",
            href: "contact"
          }}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Starbucks"
          description="Inspiring and nurturing the human spirit — one person, one cup and one neighborhood at a time"
          buttons={[
            {
              text: "Order Now",
              href: "https://starbucks.com/menu"
            },
            {
              text: "Find Store",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/ge54761040b6e52bca1009b393cb69000412270fe4b3b5554d1c40d8a1dbfa5b26cae40cd4840f3b3610c1391a0446901abdf33420de418c1213c23508f765926_1280.jpg"
          imageAlt="Starbucks coffee shop interior"
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "From our humble beginnings in Seattle's Pike Place Market to becoming the world's premier specialty coffee company, Starbucks has always been about connection.",
            "We're not just passionate purveyors of coffee, but everything else that goes with a full and rewarding coffeehouse experience."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "https://starbucks.com/about-us"
            }
          ]}
          showBorder={true}
        />
      </div>

      {/* Feature Section */}
      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Crafting Excellence"
          description="Every cup tells a story of quality, craftsmanship and connection"
          tag="Our Craft"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Master Roasting",
              description: "Our master roasters bring out the unique flavor characteristics of each coffee origin through precise roasting techniques perfected over decades",
              imageSrc: "https://pixabay.com/get/g311a8dbfbf9f2e3e5d8ea32970b34cd68cb7e1af98ff930edf50b61a94e5eefda368bc8f0c7d1aa2291690e495fbceea6c355b9e7cba83704566b2c640c1e99c_1280.jpg",
              imageAlt: "Coffee beans being roasted"
            },
            {
              id: "02",
              title: "Expert Brewing",
              description: "Every drink is handcrafted by our skilled baristas who understand the art and science of coffee extraction and milk steaming",
              imageSrc: "https://pixabay.com/get/g8a2c2ce8f2cdb836395258f8efeab4b4a4d3e5a0a18cb458ef88a74297d329a0092d0f2c07d6a7a844d9f0b9e3da6fb4ca3845f666081a2faf2cae55ade5bb7a_1280.jpg",
              imageAlt: "Barista brewing coffee"
            },
            {
              id: "03",
              title: "Premium Equipment",
              description: "We use state-of-the-art espresso machines and brewing equipment to ensure consistency and quality in every cup we serve",
              imageSrc: "https://pixabay.com/get/g27e51217883b766b0a55a7d6499dc73472876d71496d520c86de9987ebe25900e193bc9a09579ea21ea786033c2383fd3aa3835dae290815de8be8c90e96380a_1280.jpg",
              imageAlt: "Professional espresso machine"
            },
            {
              id: "04",
              title: "Cold Innovation",
              description: "Our cold brew process takes 20 hours to create a smooth, naturally sweet coffee that's never bitter, served over ice for the perfect refreshment",
              imageSrc: "https://pixabay.com/get/g60ed98824cc6fb67ee622c34a5d7ae015066ea2a0d5fab2898b83fdebb0115e75aef0f9ad4413653c433b62a1ca64b31f00a7ceba2730781bae44564bfb7387f_1280.jpg",
              imageAlt: "Cold brew coffee preparation"
            }
          ]}
        />
      </div>

      {/* Product Section */}
      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Beverages"
          description="Discover our signature handcrafted beverages made with premium ingredients"
          tag="Menu Favorites"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "latte",
              name: "Caffè Latte",
              price: "$5.45",
              imageSrc: "https://pixabay.com/get/g5b1e4ae5b71f492023bc48901bdde5c98e2377e01d0cd2fa9cf71c3d6555f93c4be3d74f8ab8e6aec0a53b2cd2bcde4b8be332aafe93a84c94db665c362a3f72_1280.jpg",
              imageAlt: "Caffè Latte"
            },
            {
              id: "frappuccino",
              name: "Frappuccino®",
              price: "$5.95",
              imageSrc: "https://pixabay.com/get/g58ee912fc079a2049fd4032989dc4502306b70742f01ed63163fb9da81b53ea9dc8c22651f16ec6efd43c737968e920dce811e43569abca43762db4e99ffb44f_1280.jpg",
              imageAlt: "Frappuccino blended beverage"
            },
            {
              id: "americano",
              name: "Caffè Americano",
              price: "$3.65",
              imageSrc: "https://pixabay.com/get/g4945c76080714605806f33a650b36bd409e077f6191e577dd3912c2b3c1c609f7ada05a14325313a9f4d2a7b062d3cf375bf4616f4e8b769ce7c46592fc2dabf_1280.jpg",
              imageAlt: "Caffè Americano"
            },
            {
              id: "cappuccino",
              name: "Cappuccino",
              price: "$4.95",
              imageSrc: "https://pixabay.com/get/ge7949c90e2fae9163e3930eec55d8fcd9e0b1eeb0ff91ea3d94723ae13c04f0d674a8284de6d069aea43461848d3fafd1d28af138bcfc3469e34b7c48d2c38eb_1280.jpg",
              imageAlt: "Cappuccino with foam art"
            },
            {
              id: "macchiato",
              name: "Caramel Macchiato",
              price: "$5.75",
              imageSrc: "https://pixabay.com/get/g489a1122a8bf03ac974eb5430bffd8f831252c5da69011cedb6ab8bb89d7056591b3ad0fc1f3dc8fcf0fe0038f080fb3a1559e136f9dfe8684608d37ed6b63aa_1280.jpg",
              imageAlt: "Caramel Macchiato"
            },
            {
              id: "mocha",
              name: "Caffè Mocha",
              price: "$5.25",
              imageSrc: "https://pixabay.com/get/g9687fea670aed15338bc26b49b6e7c5f3d10a46d045a2693bd4826316a9712467cbf4726f5d96ca8b181a19d37c0e48d8b6560b203dbde49c82c56f3d44ef0af_1280.jpg",
              imageAlt: "Caffè Mocha"
            }
          ]}
        />
      </div>

      {/* Pricing Section */}
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Starbucks Rewards"
          description="Earn Stars and get rewarded with free drinks, food and more"
          tag="Membership"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "green",
              badge: "Welcome Level",
              price: "0 Stars",
              subtitle: "Start earning Stars with every purchase",
              buttons: [
                {
                  text: "Join Free",
                  href: "https://starbucks.com/rewards"
                },
                {
                  text: "Learn More",
                  href: "https://starbucks.com/rewards/how-it-works"
                }
              ],
              features: [
                "Free birthday reward",
                "Mobile order & pay",
                "Free in-store refills",
                "Customize favorite orders"
              ]
            },
            {
              id: "gold",
              badge: "Gold Status",
              badgeIcon: Star,
              price: "25+ Stars",
              subtitle: "Unlock exclusive benefits and personalized offers",
              buttons: [
                {
                  text: "Upgrade Now",
                  href: "https://starbucks.com/rewards/gold"
                },
                {
                  text: "View Benefits",
                  href: "https://starbucks.com/rewards/benefits"
                }
              ],
              features: [
                "Free food or drink every 125 Stars",
                "Extra Stars on Bonus Days",
                "Personalized offers",
                "Free birthday reward upgrade",
                "Early access to new products"
              ]
            }
          ]}
        />
      </div>

      {/* Metric Section */}
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Global Impact"
          description="Numbers that showcase our commitment to communities worldwide"
          tag="Our Reach"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "stores",
              value: "35,000+",
              description: "Stores worldwide in 80+ countries"
            },
            {
              id: "partners",
              value: "380,000+",
              description: "Partners (employees) globally"
            },
            {
              id: "customers",
              value: "100M+",
              description: "Customer visits per week"
            },
            {
              id: "communities",
              value: "$100M+",
              description: "Invested in communities annually"
            }
          ]}
        />
      </div>

      {/* Team Section */}
      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Partners"
          description="Meet the passionate people who bring the Starbucks experience to life"
          tag="Team"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          members={[
            {
              id: "barista1",
              name: "Maria Santos",
              role: "Store Manager",
              imageSrc: "https://pixabay.com/get/g893b847f4d36dac43c6fa505266d70e9d9ddb1123fe6eea6acc2e623956820f8ed8e5c030c5981979757e76041cb2d9d99643afa500d3667ee928ea0350c5149_1280.jpg",
              imageAlt: "Maria Santos, Store Manager"
            },
            {
              id: "barista2",
              name: "James Chen",
              role: "Head Barista",
              imageSrc: "https://pixabay.com/get/ge5c4d6ecb106ed54fa93e6d68e5f923d5dd6a2149b9a04ce21082f82e3dd564167dfda2ddfd496eed9b5d48de71e1c9616a1b88e9890bd08893d2822adddf313_1280.jpg",
              imageAlt: "James Chen, Head Barista"
            },
            {
              id: "barista3",
              name: "Emily Rodriguez",
              role: "Shift Supervisor",
              imageSrc: "https://pixabay.com/get/gb1d24e149ad7c8c157fe76d1826ef0dd9d4f6bfd2f29bbcabc880825e6452bc7b86fa0b38f92345af1cd834a6c5426426c8fff6181f4e69bf916e2b971e7a3ce_1280.jpg",
              imageAlt: "Emily Rodriguez, Shift Supervisor"
            }
          ]}
        />
      </div>

      {/* Social Proof Section */}
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="Collaborating with leading brands to bring you exceptional experiences"
          tag="Partnerships"
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Get the latest updates"
          description="Be the first to know about new menu items, promotions, and Starbucks news. Join our community today."
          tagIcon={Coffee}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from Starbucks. Unsubscribe anytime."
          imageSrc="https://pixabay.com/get/g68211d2cb332310e12da5a600015afead9985259e8c0056b769e1ee0c3520696e55f6a88535fc559cfe5d5c5ef98fad9b7a417a43160aed95c31fe2335d0f138_1280.jpg"
          imageAlt="Cozy Starbucks coffee shop atmosphere"
          mediaPosition="right"
        />
      </div>

      {/* Footer Section */}
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Starbucks"
          copyrightText="© 2025 Starbucks Coffee Company. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Hot Coffees",
                  href: "https://starbucks.com/menu/drinks/hot-coffees"
                },
                {
                  label: "Cold Coffees",
                  href: "https://starbucks.com/menu/drinks/cold-coffees"
                },
                {
                  label: "Frappuccino®",
                  href: "https://starbucks.com/menu/drinks/frappuccino-blended-beverages"
                },
                {
                  label: "Food",
                  href: "https://starbucks.com/menu/food"
                }
              ]
            },
            {
              title: "Quick Links",
              items: [
                {
                  label: "Store Locator",
                  href: "https://starbucks.com/store-locator"
                },
                {
                  label: "Rewards",
                  href: "https://starbucks.com/rewards"
                },
                {
                  label: "Gift Cards",
                  href: "https://starbucks.com/gift"
                },
                {
                  label: "Careers",
                  href: "https://starbucks.com/careers"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "https://starbucks.com/about-us"
                },
                {
                  label: "Newsroom",
                  href: "https://news.starbucks.com"
                },
                {
                  label: "Social Impact",
                  href: "https://starbucks.com/responsibility"
                },
                {
                  label: "Investor Relations",
                  href: "https://investor.starbucks.com"
                }
              ]
            },
            {
              title: "Customer Service",
              items: [
                {
                  label: "Contact Us",
                  href: "https://customerservice.starbucks.com/app/contact/ask"
                },
                {
                  label: "My Account",
                  href: "https://starbucks.com/account/signin"
                },
                {
                  label: "Order Status",
                  href: "https://starbucks.com/rewards/mobile-apps"
                },
                {
                  label: "Accessibility",
                  href: "https://starbucks.com/accessibility"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/starbucks",
              ariaLabel: "Follow Starbucks on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/starbucks",
              ariaLabel: "Follow Starbucks on Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/starbucks",
              ariaLabel: "Follow Starbucks on Facebook"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/starbucks",
              ariaLabel: "Subscribe to Starbucks YouTube channel"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}