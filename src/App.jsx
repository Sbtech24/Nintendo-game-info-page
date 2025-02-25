import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <div className=" flex justify-center bg-lightGrey p-3">
          <p>
            Free shipping on orders $50 or more. Restrictions apply | Earn my
            Nintendo Points on digital games
          </p>
        </div>

        <section className="bg-lightBlue p-5">
          <div className="flex max-w-screen-md mx-auto bg-white justify-center p-10 gap-2" >
            {/* carosel div left side  */}
            <div className="w-1/2">
              <img src="./assets/game2.jpg" alt="" />
            </div>

            {/* Right div */}
            <div classname="p-3">
              <p className="text-sm">Nintendo Switch </p>
              <h1 className="text-darkGrey2 font-semibold text-lg">Stardew Valley</h1>
              <div className="flex justify-between">
                <span className="text-darkGrey2 font-semibold text-lg">$14.99</span>
                <button><box-icon name="heart" color="red"></box-icon></button>
              </div>

              <p className="text-sm ">Eligible for up 75 Gold points </p>

              <button className="bg-red p-3 text-white rounded-md w-full">Direct download</button>

              <p className="text-sm ">
                This item will be sent to your system automatically after
                purchase
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center max-w-screen-md gap-3 mx-auto">
            <div>
              <h2 className="text-darkGrey2 font-bold">You're moving to the valley</h2>

              <p className="text-sm">
              You’ve inherited your 
              grandfather’s old farm plot in Stardew Valley.
              Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared.
              The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity.
              With a little dedication, you might just be the one to restore Stardew Valley to greatness!

              Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, 
              players have the option to scale profit margin on produce sold for a more challenging experience.

              </p>
              {/* Read More button */}
              <p className="text-sm">Sofware description provided by the publisher </p>
              <button className="bg-red p-3 text-white rounded-md w-full">Explore this game's official website </button>
            </div>

            <div>
              {/* Image  */}
              <img src="./assets/game2.jpg" alt="" />
            
            </div>

          </div>
        </section>

        <section>
          <div className="flex max-w-screen-md mx-auto justify-between">

          
            <div className="bg-lightGrey w-1/2 text-center p-3">
              <h3 className="text-darkGrey font-semibold">ESRB rating</h3>

              <div>
                <img src="" alt="" />

                <div className="text-left bg-white ">
                  <p className="text-sm p-2 ">Fantasy Violence,Use of Alcohol,Use of Tobacco,
                    Simulated Gambling, Mild Language,Mild Blood 

                  </p>

                  <p className="text-sm border-t p-2 border-t-black">Users Interact </p>
                </div>
                
              </div>
            </div>



            <div className="bg-lightGrey">
              <div>
                <div>
                  <box-icon name="tv"></box-icon>
                </div>
                <div></div>
                <div></div>
              </div>

              <div>
                <ul className="flex justify-around">

                  <li>TV</li>
                  <li>Tabletop</li>
                  <li>Handheld</li>
                </ul>
              </div>
            </div>

          </div>
        </section>


        <section>
          <div>
            <ul>
             <li>Release date</li>
             <li>No of players</li>
             <li>Genre</li>
             <li>Publisher</li>
             <li>Developer</li>
             <li>ESRB rating</li>
             <li>Supported play modes </li>
             <li>Game file size</li>
             <li>Supported languages </li>
            </ul>
          </div>


          <div>
            <ul>
              <li>October ,2017 </li>
              <li>
                <ul>
                  <li>Single System(1)</li>
                  <li>Local wireless (1)</li>
                  <li>online(1-4)</li>
                </ul>
              </li>


              <li>
                <ul>
                  <li>Role-playing</li>
                  <li>Simulation</li>
                </ul>
              </li>

              <li>ConcernedApe</li>
              <li>ConcernedApe</li>
              <li>Everyone10+</li>
              <li>TV mode,Tabletop mode,Handheld mode</li>
              <li>1.5GB </li>
              <li>English,French,German,Italian,Japanese,
                Korean, Portuguese, Rusian,Simplified Chinese, Spanish, Traditional Chinese
              </li>
            </ul>
          </div>
        </section>


        <section>
          <div>
            <h2>Online</h2>
            <p>Play online,access classics</p>

            <p>This game supports: Online Play Save Data Cloud </p>

            <button>Learn more </button>
          </div>

          <div>
            {/* man holding a switch  */}
            <img src="" alt="" />
          </div>
        </section>

        {/* More Like this carousel component  */}
        <section>

        </section>

        <section>
          <div>
            <p>WARNING: If you have epilepsy
               or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.
              
            </p>


          </div>
          <div>
            <p>Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. 

            </p>

          </div>
          <p>Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.

          </p>
        </section>

        <footer>
          <div>
            {/* Nintendo log  */}
            <img src="" alt="" />

            {/* Social Icons */}
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>

          <section>
            <div>
              <div>
                <h2>About Nintendo</h2>

                <ul>
                  <li>Careers</li>
                  <li>Corporate Social Responsibility</li>
                </ul>
              </div>

              <div>
                <h2>Shop</h2>

                <ul>
                  <li>Games</li>
                  <li>Hardware</li>
                  <li>Mercahandise</li>
                  <li>Sales & deals</li>
                  <li>Exclusives</li>
                  <li>Online service</li>
                  <li>Nintendo NY store</li>
                </ul>
              </div>

              <div>
                <h2>Orders</h2>

                <ul>
                  <li>Order details</li>
                  <li>Shipping info</li>
                  <li>Returns & exchanges </li>
                  <li>FAQ</li>
                </ul>
              </div>

              <div>
                <h2>Support</h2>

                <ul>
                  <li>Nintendo Switch</li>
                  <li>Nintendo Account</li>
                  <li>Other systems</li>
                  <li>Repairs</li>
                  <li>Nintendo product recycling</li>
                  <li>Warranty</li>
                  <li>Licensed product information</li>
                </ul>
              </div>

              <div>
                <h2>Parents</h2>

                <ul>
                  <li>Info for parents </li>
                  <li>Parental controls</li>
                </ul>
              </div>

              <div>
                <h2>Privacy</h2>
                <ul>
                  <li>Privacy policy </li>
                  <li>Cookies and interst-based ads</li>
                </ul>
              </div>

              <div>
                <h2>Community</h2>

                <ul>
                  <li>Community guidelines</li>
                  <li>Online safety principles </li>
                </ul>
              </div>

              <div>
                <h2>Documents & policies</h2>

                <ul>
                  <li>Health & safety precautions</li>
                  <li>Wireless regulations </li>
                  <li>Supply chain transperancy</li>
                </ul>
              </div>

              {/* Bottom Image Flex-end  */}
              <div></div>

            </div>
          </section>

          <section>
            <div>
              <p>Nintendo. Games are property of their respective owners.
                Nintendo of America Inc. Headquaters are in Redmond, 
                Washington,USA
              </p>
            </div>

            <div>
              <ul>
                <li>Contact us </li>
                <li>Website feedback</li>
                <li>Terms of use </li>
                <li>English(united states)</li>
              </ul>
            </div>
          </section>
        </footer>
      </main>
    </div>
  );
};

export default App;
