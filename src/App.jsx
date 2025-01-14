import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <div>
          <p>
            Free shipping on orders $50 or more. Restrictions apply | Earn my
            Nintendo Points on digital games
          </p>
        </div>

        <section>
          <div>
            {/* carosel div left side  */}
            <div></div>

            {/* Right div */}
            <div>
              <p>Nitendo Switch </p>
              <h1>Stardew Valley</h1>
              <div>
                <span>$14.99</span>
                <button>Like Button</button>
              </div>

              <p>Eligible for up 75 Gold points </p>

              <button>Direct download</button>

              <p>
                This item will be sent to your system automatically after
                purchase{" "}
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h2>You're moving to the valley</h2>

              <p>
              You’ve inherited your 
              grandfather’s old farm plot in Stardew Valley.
              Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared.
              The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity.
              With a little dedication, you might just be the one to restore Stardew Valley to greatness!

              Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, 
              players have the option to scale profit margin on produce sold for a more challenging experience.

              </p>
              {/* Read More button */}
              <p>Sofware description provided by the publisher </p>
              <button>Explore this game's official website </button>
            </div>

            <div>
              {/* Image  */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
