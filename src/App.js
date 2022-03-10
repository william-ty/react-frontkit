import './App.css';

function App() {
  return (
    <div class="page page--styleguide has-sticky-header">

      <div class="site-wrapper" aria-hidden="false">

        {/* SITE HEADER */}

        <header class="site-header">

          {/* PRE-HEADER */}

          {/* 
          <section class="section section--pre-header">
            <div class="container">
              <div>This is the pre-header section</div>
            </div>
          </section> */}

          {/* HEADER */}

          <section class="section section--header">
            <div class="container">

              <nav class="navbar" role="navigation">

                {/* LOGO */}

                <div class="navbar-header">
                  <a class="navbar-logo" href="/" rel="home">
                    <svg class="logo logo--mobile" viewBox="0 0 48 48">
                      <use xlinkHref="#logo-mobile"></use>
                    </svg>
                    <svg class="logo logo--tablet" viewBox="0 0 150 48">
                      <use xlinkHref="#logo-tablet"></use>
                    </svg>
                    <svg class="logo logo--desktop" viewBox="0 0 200 76">
                      <use xlinkHref="#logo-desktop"></use>
                    </svg>
                  </a>
                </div>

                {/* MAIN MENU */}

                <div class="navbar-body">
                  <nav class="navbar-menu navbar-menu--desktop">
                    <ul class="menu">

                      {/* Mobile menu close button */}
                      <li class="menu-item menu-item--panel-menu-close">
                        <button class="menu-item-link btn btn-white btn-round btn-bg-grow"
                          data-toggle="body" data-toggle-classname="has-panel-menu"
                        >
                          <span class="sr-only">Close menu</span>
                          <span>MENU</span>
                          &nbsp;
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-close"></use>
                          </svg>
                        </button>
                      </li>

                      <li class="menu-item">
                        <a href="#colors" class="menu-item-link">
                          <span>Colors</span>
                        </a>
                      </li>

                      <li class="menu-item">
                        <a href="#type" class="menu-item-link">
                          <span>Typography</span>
                        </a>
                      </li>

                      <li class="menu-item">
                        <a href="#forms" class="menu-item-link">
                          <span>Forms</span>
                        </a>
                      </li>

                      <li class="menu-item">
                        <a href="#icons" class="menu-item-link">
                          <span>Icons</span>
                        </a>
                      </li>

                      <li class="menu-item">
                        <a href="#buttons" class="menu-item-link">
                          <span>Buttons</span>
                        </a>
                      </li>

                      {/* <li class="menu-item menu-item--dropdown">
                        <a href="#" class="menu-item-link">
                          <span>Item</span>
                        </a>
                        <span class="menu-item-link dropdown-toggle" data-dropdown>
                          <span class="caret"></span>
                        </span>
                        <div class="dropdown-wrapper">
                          <ul class="dropdown-menu">
                            <li class="menu-item">
                              <a href="#" class="menu-item-link">
                                <span>Sub-item</span>
                              </a>
                            </li>
                            <li class="menu-item">
                              <a href="#" class="menu-item-link">
                                <span>Sub-item</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li> */}

                    </ul>
                  </nav>
                </div>

                {/* ACTION BUTTONS */}

                <div class="navbar-footer">
                  <nav class="navbar-menu navbar-menu--mobile">
                    <ul class="menu">

                      <li class="menu-item">
                        <button class="menu-item-link btn btn-white btn-round btn-bg-grow">
                          <span class="sr-only">My cart</span>
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-cart"></use>
                          </svg>
                          {/* <span class="icon-label">13</span> */}
                        </button>
                      </li>

                      {/* Mobile menu open button */}
                      <li class="menu-item menu-item--panel-menu-open">
                        <button class="menu-item-link btn btn-white btn-round btn-bg-grow"
                          data-toggle="body" data-toggle-classname="has-panel-menu"
                        >
                          <span>MENU</span>
                          &nbsp;
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-menu"></use>
                          </svg>
                        </button>
                      </li>

                    </ul>
                  </nav>

                  {/* {% include 'header/menu-buttons.twig' %} */}

                </div>
              </nav>

            </div>{/* End .container */}
          </section>

          {/* POST-HEADER */}

          {/* <section class="section section--post-header">
            <div class="container">
              <div>This is the post-header section</div>
            </div>
          </section> */}

        </header>

        {/* SITE BODY */}

        <main class="site-body">

          <section class="section section--styleguide">
            <div class="container">

              <h1>Diatem Front-end Skeleton - Styleguide</h1>
              <blockquote>
                <p>If you start me up, I'll never stop.</p>
                <cite>– Mick Jagger</cite>
              </blockquote>

            </div>
          </section>

          {/* COLORS */}

          <section class="section section--styleguide" id="colors">
            <div class="container">

              <h2>Colors</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_colors.scss</code></em></p>

              <h3 class="styleguide-h3">Primary colors</h3>
              <div class="styleguide-color-blocks">
                <div class="styleguide-color-block bg-primary-lightest">
                  <div class="styleguide-color-block__label">$color-primary-lightest</div>
                </div>
                <div class="styleguide-color-block bg-primary-lighter">
                  <div class="styleguide-color-block__label">$color-primary-lighter</div>
                </div>
                <div class="styleguide-color-block bg-primary-light">
                  <div class="styleguide-color-block__label">$color-primary-light</div>
                </div>
                <div class="styleguide-color-block bg-primary-lighty">
                  <div class="styleguide-color-block__label">$color-primary-lighty</div>
                </div>
                <div class="styleguide-color-block bg-primary">
                  <div class="styleguide-color-block__label">$color-primary</div>
                </div>
                <div class="styleguide-color-block bg-primary-darky">
                  <div class="styleguide-color-block__label">$color-primary-darky</div>
                </div>
                <div class="styleguide-color-block bg-primary-dark">
                  <div class="styleguide-color-block__label">$color-primary-dark</div>
                </div>
                <div class="styleguide-color-block bg-primary-darker">
                  <div class="styleguide-color-block__label">$color-primary-darker</div>
                </div>
                <div class="styleguide-color-block bg-primary-darkest">
                  <div class="styleguide-color-block__label">$color-primary-darkest</div>
                </div>
              </div>
              <h3 class="styleguide-h3">Secondary colors</h3>
              <div class="styleguide-color-blocks">
                <div class="styleguide-color-block bg-secondary-lightest">
                  <div class="styleguide-color-block__label">$color-secondary-lightest</div>
                </div>
                <div class="styleguide-color-block bg-secondary-lighter">
                  <div class="styleguide-color-block__label">$color-secondary-lighter</div>
                </div>
                <div class="styleguide-color-block bg-secondary-light">
                  <div class="styleguide-color-block__label">$color-secondary-light</div>
                </div>
                <div class="styleguide-color-block bg-secondary-lighty">
                  <div class="styleguide-color-block__label">$color-secondary-lighty</div>
                </div>
                <div class="styleguide-color-block bg-secondary">
                  <div class="styleguide-color-block__label">$color-secondary</div>
                </div>
                <div class="styleguide-color-block bg-secondary-darky">
                  <div class="styleguide-color-block__label">$color-secondary-darky</div>
                </div>
                <div class="styleguide-color-block bg-secondary-dark">
                  <div class="styleguide-color-block__label">$color-secondary-dark</div>
                </div>
                <div class="styleguide-color-block bg-secondary-darker">
                  <div class="styleguide-color-block__label">$color-secondary-darker</div>
                </div>
                <div class="styleguide-color-block bg-secondary-darkest">
                  <div class="styleguide-color-block__label">$color-secondary-darkest</div>
                </div>
              </div>
              <h3 class="styleguide-h3">Accent colors</h3>
              <div class="styleguide-color-blocks">
                <div class="styleguide-color-block bg-accent-lightest">
                  <div class="styleguide-color-block__label">$color-accent-lightest</div>
                </div>
                <div class="styleguide-color-block bg-accent-lighter">
                  <div class="styleguide-color-block__label">$color-accent-lighter</div>
                </div>
                <div class="styleguide-color-block bg-accent-light">
                  <div class="styleguide-color-block__label">$color-accent-light</div>
                </div>
                <div class="styleguide-color-block bg-accent-lighty">
                  <div class="styleguide-color-block__label">$color-accent-lighty</div>
                </div>
                <div class="styleguide-color-block bg-accent">
                  <div class="styleguide-color-block__label">$color-accent</div>
                </div>
                <div class="styleguide-color-block bg-accent-darky">
                  <div class="styleguide-color-block__label">$color-accent-darky</div>
                </div>
                <div class="styleguide-color-block bg-accent-dark">
                  <div class="styleguide-color-block__label">$color-accent-dark</div>
                </div>
                <div class="styleguide-color-block bg-accent-darker">
                  <div class="styleguide-color-block__label">$color-accent-darker</div>
                </div>
                <div class="styleguide-color-block bg-accent-darkest">
                  <div class="styleguide-color-block__label">$color-accent-darkest</div>
                </div>
              </div>
              <h3 class="styleguide-h3">Gray colors</h3>
              <div class="styleguide-color-blocks">
                <div class="styleguide-color-block bg-gray-lightest">
                  <div class="styleguide-color-block__label">$color-gray-lightest</div>
                </div>
                <div class="styleguide-color-block bg-gray-lighter">
                  <div class="styleguide-color-block__label">$color-gray-lighter</div>
                </div>
                <div class="styleguide-color-block bg-gray-light">
                  <div class="styleguide-color-block__label">$color-gray-light</div>
                </div>
                <div class="styleguide-color-block bg-gray-lighty">
                  <div class="styleguide-color-block__label">$color-gray-lighty</div>
                </div>
                <div class="styleguide-color-block bg-gray">
                  <div class="styleguide-color-block__label">$color-gray</div>
                </div>
                <div class="styleguide-color-block bg-gray-darky">
                  <div class="styleguide-color-block__label">$color-gray-darky</div>
                </div>
                <div class="styleguide-color-block bg-gray-dark">
                  <div class="styleguide-color-block__label">$color-gray-dark</div>
                </div>
                <div class="styleguide-color-block bg-gray-darker">
                  <div class="styleguide-color-block__label">$color-gray-darker</div>
                </div>
                <div class="styleguide-color-block bg-gray-darkest">
                  <div class="styleguide-color-block__label">$color-gray-darkest</div>
                </div>
              </div>
              <h3 class="styleguide-h3">Universal colors</h3>
              <div class="styleguide-color-blocks">
                <div class="styleguide-color-block bg-error">
                  <div class="styleguide-color-block__label">$color-error</div>
                </div>
                <div class="styleguide-color-block bg-warning">
                  <div class="styleguide-color-block__label">$color-warning</div>
                </div>
                <div class="styleguide-color-block bg-info">
                  <div class="styleguide-color-block__label">$color-info</div>
                </div>
                <div class="styleguide-color-block bg-success">
                  <div class="styleguide-color-block__label">$color-success</div>
                </div>
              </div>

            </div>
          </section>

          {/* TYPOGRAPHY */}

          <section class="section section--styleguide" id="type">
            <div class="container">

              <h2>Typography</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_type.scss</code></em></p>

              <h3 class="styleguide-h3">Headings</h3>

              {/* <h1>Heading 1</h1> */}
              <h1>Heading 1<br />on two lines</h1>
              {/* <h2>Heading 2</h2> */}
              <h2>Heading 2<br />on two lines</h2>
              {/* <h3>Heading 3</h3> */}
              <h3>Heading 3<br />on two lines</h3>
              {/* <h4>Heading 4</h4> */}
              <h4>Heading 4<br />on two lines</h4>
              {/* <h5>Heading 5</h5> */}
              <h5>Heading 5<br />on two lines</h5>
              {/* <h6>Heading 6</h6> */}
              <h6>Heading 6<br />on two lines</h6>

              <h3 class="styleguide-h3">Body text</h3>

              <h4>Biggest p</h4>

              <p class="font-size-biggest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
                voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
                eaque tempora voluptas, voluptatem animi commodi.
              </p>

              <h4>Bigger p</h4>

              <p class="font-size-bigger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
                voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
                eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus! Aliquid
                eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate.
              </p>

              <h4>Big p</h4>

              <p class="font-size-big">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
                voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
                eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus! Aliquid
                eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate. Magni at,
                provident culpa minima ex porro ipsum ut dignissimos nam commodi quis qui dolorum saepe perferendis
                beatae alias facere assumenda voluptatem eum suscipit architecto! Ea.
              </p>

              <h4>Default p</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
                voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
                eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus!
              </p>
              <p>
                Aliquid eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate.
                Magni at, provident culpa minima ex porro ipsum ut dignissimos nam commodi quis qui dolorum saepe
                perferendis beatae alias facere assumenda voluptatem eum suscipit architecto! Ea.
              </p>

              <h4>Small p</h4>

              <p class="font-size-small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
                voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
                eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus! Aliquid
                eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate. Magni at,
                provident culpa minima ex porro ipsum ut dignissimos nam commodi quis qui dolorum saepe perferendis
                beatae alias facere assumenda voluptatem eum suscipit architecto! Ea.
              </p>

              <h4>Smaller p</h4>

              <p class="font-size-smaller">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
                voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
                eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus! Aliquid
                eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate. Magni at,
                provident culpa minima ex porro ipsum ut dignissimos nam commodi quis qui dolorum saepe perferendis
                beatae alias facere assumenda voluptatem eum suscipit architecto! Ea.
              </p>

              <h3 class="styleguide-h3">Links</h3>

              <p><a href="#">This is a link</a></p>

              <p>Lorem ipsum dolor sit amet consectetur <a href="#">inline link</a>. Veniam placeat consectetur
                eius, natus animi itaque rerum, adoloremque magnam totam, <a href="#">adipisci corrupti quaerat</a>.
                Animi libero harum repudiandae maxime nihil reprehenderit. Beatae?</p>

              <p><a href="#" class="btn btn-default">Link as a button</a></p>

              <h3 class="styleguide-h3">Lists</h3>

              <h4>Unordered list</h4>

              <ul>
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
                <li>Item #4</li>
              </ul>

              <h4>Ordered list</h4>

              <ol>
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
                <li>Item #4</li>
              </ol>

              <h3 class="styleguide-h3">Horizontal rule</h3>

              <hr />

              <h3 class="styleguide-h3">Quotes</h3>

              <blockquote>
                <p>I do not fear computers. I fear the lack of them.</p>
                <cite>– Isaac Asimov</cite>
              </blockquote>

              <blockquote>
                <p>But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want
                  goodness. I want sin.</p>
                <cite>– Aldous Huxley, Brave New World</cite>
              </blockquote>

              <h3 class="styleguide-h3">Code</h3>

              <h4>Inline code</h4>

              <p>Lorem ipsum <code>dolor sit amet</code> consectetur adipisicing elit. Laboriosam, deserunt dicta
                recusandae voluptas ab nam dignissimos cum obcaecati dolorem, explicabo aperiam temporibus
                repellendus id aspernatur nostrum? Quaerat <code>odit</code> pariatur fuga.</p>

              <h4>Pre & code</h4>

              <pre>
                <code>
                  {/**/}Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  Ducimus perspiciatis sit repellat eum ullam,
                  architecto itaque consequatur beatae.
                  {/**/}
                </code>
              </pre>

            </div>
          </section>

          {/* FORMS */}

          <section class="section section--styleguide" id="forms">
            <div class="container">

              <h2 id="forms">Forms</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_forms.scss</code></em></p>

              <div class="row">
                <div class="col">
                  <h3 class="styleguide-h3">Inline forms</h3>

                  <h4>Inline forms with block inputs</h4>
                  <div class="form form--inline form--inline-sm margin-bottom">
                    <div class="input-block flex-grow">
                      <label for="text01">Text input</label>
                      <div class="input">
                        <input type="text" id="text01" placeholder="This one has flex grow" />
                      </div>
                    </div>
                    <div class="input-block">
                      <label for="area01">Select</label>
                      <div class="input">
                        <select name="" id="">
                          <option value="">One</option>
                          <option value="">Very very long two</option>
                          <option value="">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="input-block">
                      <div class="label">Checkbox</div>
                      <div class="input input--inline">
                        <div class="checkbox">
                          <input type="checkbox" id="radio10" name="radio01x" checked="checked" />
                          <label for="radio10"><span>Yes I do</span></label>
                        </div>
                      </div>
                    </div>
                    <div class="input-block">
                      <label for="date">Date input</label>
                      <div class="input">
                        <input type="date" id="date01" />
                      </div>
                    </div>
                    <button class="btn btn-primary flex-push-right" type="submit">Go!</button>
                  </div>

                  <h4>Inline forms with inline inputs</h4>
                  <div class="form form--inline form--inline-xs margin-bottom">
                    <div class="input-block input-block--inline">
                      <label for="text01">Email</label>
                      <div class="input input--inline">
                        <input type="email" id="" placeholder="Ex: john.doe@gmail.com" />
                        <button class="input-after btn btn-secondary">
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-arrow-right"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* <div class="input-block input-block--inline">
                      <label for="text01">Password</label>
                      <div class="input">
                        <input type="password" id="" placeholder="8 numbers" />
                      </div>
                    </div> */}
                    <div class="input-block input-block--inline">
                      <div class="label">Checkbox</div>
                      <div class="input input--inline">
                        <div class="checkbox">
                          <input type="checkbox" id="radio10" name="radio01x" checked="checked" />
                          <label for="radio10"><span>Yes I do</span></label>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-default btn-round btn-bg-grow flex-push-right" type="reset">
                      <svg class="icon" viewBox="0 0 24 24">
                        <use xlinkHref="#icon-close"></use>
                      </svg>
                      <span class="sr-only">Reset</span>
                    </button>
                    <button class="btn btn-default btn-round btn-bg-grow" type="reset">
                      <svg class="icon" viewBox="0 0 24 24">
                        <use xlinkHref="#icon-menu"></use>
                      </svg>
                      <span class="sr-only">Menu</span>
                    </button>
                    <button class="btn btn-accent btn-round" type="submit">
                      <span>Login</span>
                      &nbsp;
                      <svg class="icon" viewBox="0 0 24 24">
                        <use xlinkHref="#icon-arrow-right"></use>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <h3 class="styleguide-h3">Block forms</h3>
                </div>
                <div class="col-md-6">
                  <section class="form row">
                    <h4>Block forms with block inputs</h4>
                    <div class="input-block col-md-6 input-block--required">
                      <label for="text011">Text input</label>
                      <div class="input">
                        <input type="text" id="text011" placeholder="Placeholder text" />
                      </div>
                      <div class="input-text input-text--info">Info text</div>
                    </div>
                    <div class="input-block col-md-6 input-block--required">
                      <label for="text02">Text input with a very very long label</label>
                      <div class="input input--inline">
                        <div class="input-before">
                          <span>Before</span>
                        </div>
                        <input type="text" id="text02" placeholder="Placeholder text" />
                      </div>
                    </div>
                    <div class="input-block col-md-6">
                      <label for="number01">Number input</label>
                      <div class="input">
                        <input type="number" id="number01" value="9" />
                      </div>
                      <div class="input-text input-text--info">This is the input info text</div>
                    </div>
                    <div class="input-block col-md-6">
                      <label for="number02">Number input with unit</label>
                      <div class="input input--inline">
                        <input type="number" id="number02" value="0" />
                        <div class="input-after">€</div>
                      </div>
                    </div>
                    <div class="input-block col-md-6 input-block--required input-block--disabled">
                      <label for="text012">Disabled text input</label>
                      <div class="input">
                        <input type="text" id="text012" placeholder="Placeholder text" disabled />
                      </div>
                    </div>
                    <div class="input-block col-md-6 input-block--disabled">
                      <label for="number01">Disabled Number input</label>
                      <div class="input">
                        <input type="number" id="number01" value="9" disabled />
                      </div>
                      <div class="input-text input-text--info">This is the input info text</div>
                    </div>
                    {/* other inputs */}
                    <div class="input-block">
                      <label for="area01">Select</label>
                      <div class="input">
                        <select name="" id="">
                          <option value="">One</option>
                          <option value="">Very very long two</option>
                          <option value="">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="input-block">
                      <label for="area01">Textarea</label>
                      <div class="input">
                        <textarea name="" id="area01" cols="30" rows="10"
                          placeholder="Placeholder text"></textarea>
                      </div>
                      <div class="input-text input-text--info">200 characters maximum</div>
                    </div>
                    {/* radio and checkbox */}
                    <div class="input-block col-md-6">
                      <div class="label">Radio</div>
                      <div class="input">
                        <div class="radio">
                          <input type="radio" id="radio10" name="radio01x" checked="checked" />
                          <label for="radio10">Yes I do</label>
                        </div>
                        <div class="radio">
                          <input type="radio" id="radio11" name="radio01x" />
                          <label for="radio11">No way</label>
                        </div>
                      </div>
                    </div>
                    <div class="input-block col-md-6">
                      <div class="label">Checkbox</div>
                      <div class="input">
                        <div class="checkbox">
                          <input type="checkbox" id="check010" checked="checked" />
                          <label for="check010">Very very long checkbox label Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.</label>
                        </div>
                      </div>
                      <div class="input-text input-text--info">
                        This is a very long input info text Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eligendi, rem.
                      </div>
                    </div>
                    <div class="input-block input-block--required">
                      <div class="label">Inline radio</div>
                      <div class="input input--inline">
                        <div class="radio">
                          <input type="radio" id="radio019" name="radios9" />
                          <label for="radio019">Label radio</label>
                        </div>
                        <div class="radio">
                          <input type="radio" id="radio029" name="radios9" />
                          <label for="radio029">Very long label radio</label>
                        </div>
                        <div class="radio">
                          <input type="radio" id="radio039" name="radios9" />
                          <label for="radio039">Label radio</label>
                        </div>
                      </div>
                    </div>
                    <div class="input-block">
                      <div class="label">Inline checkbox</div>
                      <div class="input input--inline">
                        <div class="checkbox">
                          <input type="checkbox" id="check10" />
                          <label for="check10">Label one</label>
                        </div>
                        <div class="checkbox">
                          <input type="checkbox" id="check11" />
                          <label for="check11">Second label</label>
                        </div>
                        <div class="checkbox">
                          <input type="checkbox" id="check12" />
                          <label for="check12">Oh my label!</label>
                        </div>
                      </div>
                    </div>

                    <div><input type="submit" value="input[type=submit]" /></div>
                    <div>
                      <button type="submit" class="btn-lg btn-round btn-hollow btn-black btn-caret">
                        <i class="fa fa-star"></i>
                        Form submit button
                      </button>
                    </div>
                  </section>
                </div>

                <div class="col-md-6">
                  {/* inline input block */}
                  <h4>Block forms with inline inputs</h4>
                  <section class="form row">
                    <div class="input-block input-block--inline input-block--required">
                      <label for="text013">Inline text input</label>
                      <div class="input">
                        <input type="text" id="text013" placeholder="Placeholder text" />
                      </div>
                    </div>
                    <div class="input-block input-block--inline input-block--required">
                      <label for="text022">Inline text input with a very very long label</label>
                      <div class="input input--inline">
                        <div class="input-before">
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-percent"></use>
                          </svg>
                        </div>
                        <input type="text" id="text022" placeholder="Placeholder text" />
                      </div>
                    </div>
                    <div class="input-block input-block--inline">
                      <label for="number01">Inline input</label>
                      <div class="input">
                        <input type="number" id="number01" value="9" />
                      </div>
                      <div class="input-text input-text--info">This is the very long input info text, spanning on multiple lines</div>
                    </div>
                    <div class="input-block input-block--inline">
                      <label for="number021">Inline input with unit</label>
                      <div class="input input--inline">
                        <input type="number" id="number021" value="0" />
                        <div class="input-after">
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-menu"></use>
                          </svg>
                          &nbsp;
                          <span>Foo</span>
                        </div>
                      </div>
                    </div>
                    <div class="input-block input-block--inline">
                      <label for="number022">Button before</label>
                      <div class="input input--inline">
                        <button class="input-before btn btn-primary">
                          <span>Bar</span>
                          &nbsp;
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-dots"></use>
                          </svg>
                        </button>
                        <input type="text" id="number022" placeholder="Some foo" />
                      </div>
                    </div>
                    <div class="input-block input-block--inline">
                      <label for="number02">Button after</label>
                      <div class="input input--inline">
                        <select name="" id="">
                          <option value="">One</option>
                          <option value="">Very very long two</option>
                          <option value="">Three</option>
                        </select>
                        <button class="input-after btn btn-secondary">
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-menu"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="input-block input-block--inline">
                      <label for="number023">Before and after</label>
                      <div class="input input--inline">
                        <div class="input-before">
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-menu"></use>
                          </svg>
                        </div>
                        <input type="text" id="number023" placeholder="Some foo" />
                        <div class="input-after btn btn-accent">
                          <span>Baz</span>
                          &nbsp;
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-arrow-right"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* disabled */}
                    <div class="input-block input-block--inline input-block--required input-block--disabled">
                      <label for="text014">Disabled inline input</label>
                      <div class="input">
                        <input type="text" id="text014" placeholder="Placeholder text" disabled />
                      </div>
                    </div>
                    <div class="input-block input-block--inline input-block--disabled">
                      <label for="number01">Disabled inline input</label>
                      <div class="input">
                        <input type="number" id="number01" value="9" disabled />
                      </div>
                      <div class="input-text input-text--info">This is the input info text</div>
                    </div>
                    <div class="input-block input-block--inline input-block--disabled">
                      <label for="number02">Before and after</label>
                      <div class="input input--inline">
                        <div class="input-before">
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-menu"></use>
                          </svg>
                        </div>
                        <input type="text" id="number02" placeholder="Some foo" disabled />
                        <button class="input-after btn btn-accent" disabled>
                          <span>Baz</span>
                          &nbsp;
                          <svg class="icon" viewBox="0 0 24 24">
                            <use xlinkHref="#icon-arrow-right"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* other inputs */}
                    <div class="input-block input-block--inline">
                      <label for="area01">Inline multiple select</label>
                      <div class="input">
                        <select multiple>
                          <option value="Choice 1">Choice 1</option>
                          <option value="Choice 2">Choice 2</option>
                          <option value="Choice 3">Choice 3</option>
                          <option value="Choice 4">Choice 4</option>
                        </select>
                      </div>
                      <div class="input-text input-text--info">Hold CTRL key</div>
                    </div>
                    <div class="input-block input-block--inline">
                      <label for="area01">Inline textarea</label>
                      <div class="input">
                        <textarea name="" id="area01" cols="30" rows="10"
                          placeholder="Placeholder text"></textarea>
                      </div>
                    </div>
                    {/* error */}
                    <h3 class="styleguide-h3">Error state</h3>
                    <div>
                      <div class="alert alert--error">
                        <i class="fa fa-exclamation-triangle"></i>
                        There are some errors!
                      </div>
                    </div>
                    {/* fieldset */}
                    <fieldset>
                      <div class="row">
                        <legend>This is a fieldset legend</legend>

                        <div class="input-block col-md-6 input-block--required input-block--error">
                          <label for="text0111">Text input</label>
                          <div class="input">
                            <input type="text" id="text0111" placeholder="Placeholder text" />
                          </div>
                          <div class="input-text input-text--error">This field is required.</div>
                        </div>
                        <div class="input-block col-md-6 input-block--required input-block--success">
                          <label for="area011">Select</label>
                          <div class="input">
                            <select name="" id="">
                              <optgroup label="Theropods">
                                <option>Tyrannosaurus</option>
                                <option>Velociraptor</option>
                                <option>Deinonychus</option>
                              </optgroup>
                              <optgroup label="Sauropods">
                                <option>Diplodocus</option>
                                <option>Saltasaurus</option>
                                <option>Apatosaurus</option>
                              </optgroup>
                            </select>
                          </div>
                          <div class="input-text input-text--success">Well done!</div>
                        </div>
                        <div class="input-block input-block--required input-block--error">
                          <div class="label">Inline radio</div>
                          <div class="input input--inline">
                            <div class="radio">
                              <input type="radio" id="radio911" name="radio111" />
                              <label for="radio911">Label one</label>
                            </div>
                            <div class="radio">
                              <input type="radio" id="radio921" name="radio111" />
                              <label for="radio921">Very long label radio</label>
                            </div>
                            <div class="radio">
                              <input type="radio" id="radio931" name="radio111" />
                              <label for="radio931">Another label</label>
                            </div>
                          </div>
                          <div class="input-text input-text--error">This field is required.</div>
                        </div>
                      </div>
                    </fieldset>
                    {/* mentions */}
                    <div>
                      <p class="font-size-small">Fields marked with a * are required.</p>
                      <p class="font-size-small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur
                        aperiam et ullam culpa aut quod? Suscipit, alias ea? A suscipit neque, dolorem
                        aspernatur provident incidunt sint fugit dolorum quas!
                      </p>
                    </div>
                  </section>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-3"></div>
              </div>

            </div>
          </section>

          {/* ICONS */}

          <section class="section section--styleguide" id="icons">
            <div class="container">

              <h2>Icons</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/components/_icons.scss</code></em></p>

              <h3 class="styleguide-h3">Icon set</h3>

              <div class="styleguide-icons styleguide-icons--icon-set">
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                  <span>arrow-left</span>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                  <span>arrow-right</span>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                  <span>close</span>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-dots"></use>
                  </svg>
                  <span>dots</span>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-menu"></use>
                  </svg>
                  <span>menu</span>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-percent"></use>
                  </svg>
                  <span>percent</span>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-cart"></use>
                  </svg>
                  <span>cart</span>
                </div>
              </div>

              <h3 class="styleguide-h3">Icon sizing</h3>

              <h4>Size: extra-extra-large (32px)</h4>

              <div class="styleguide-icons styleguide-icons--dark">
                <div>
                  <svg class="icon icon-xxl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xxl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xxl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xxl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-dots"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xxl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-menu"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xxl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-percent"></use>
                  </svg>
                </div>
              </div>

              <h4>Size: extra-large (24px)</h4>

              <div class="styleguide-icons styleguide-icons--dark">
                <div>
                  <svg class="icon icon-xl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-dots"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-menu"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xl" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-percent"></use>
                  </svg>
                </div>
              </div>

              <h4>Size: large (20px)</h4>

              <div class="styleguide-icons styleguide-icons--dark">
                <div>
                  <svg class="icon icon-lg" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-lg" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-lg" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-lg" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-dots"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-lg" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-menu"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-lg" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-percent"></use>
                  </svg>
                </div>
              </div>

              <h4>Size: default (16px)</h4>

              <div class="styleguide-icons styleguide-icons--dark">
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-dots"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-menu"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon" viewBox="0 0 24 24" width="36" height="36">
                    <use xlinkHref="#icon-percent"></use>
                  </svg>
                </div>
                <p>This one has HTML <code>width="36" height="36"</code> attributes override</p>
              </div>

              <h4>Size: small (14px)</h4>

              <div class="styleguide-icons styleguide-icons--dark">
                <div>
                  <svg class="icon icon-sm" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-sm" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-sm" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-sm" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-dots"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-sm" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-menu"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-sm" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-percent"></use>
                  </svg>
                </div>
              </div>

              <h4>Size: extra-small (12px)</h4>

              <div class="styleguide-icons styleguide-icons--dark">
                <div>
                  <svg class="icon icon-xs" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xs" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xs" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xs" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-dots"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xs" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-menu"></use>
                  </svg>
                </div>
                <div>
                  <svg class="icon icon-xs" viewBox="0 0 24 24">
                    <use xlinkHref="#icon-percent"></use>
                  </svg>
                </div>
              </div>

              <h3 class="styleguide-h3">Inline icons</h3>

              <p class="font-size-biggest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="#"><svg class="icon icon--inline icon-xxl" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="#">Another inline icon&nbsp;<svg class="icon icon--inline icon-xxl" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

              <p class="font-size-bigger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="#"><svg class="icon icon--inline icon-xl" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="#">Another inline icon&nbsp;<svg class="icon icon--inline icon-xl" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

              <p class="font-size-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="#"><svg class="icon icon--inline icon-lg" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="#">Another inline icon&nbsp;<svg class="icon icon--inline icon-lg" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="#"><svg class="icon icon--inline" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;ICONIC</a> inventore magni reiciendis voluptatum <a href="#">Another inline icon&nbsp;<svg class="icon icon--inline" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

              <p class="font-size-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="#"><svg class="icon icon--inline icon-sm" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="#">Another inline icon&nbsp;<svg class="icon icon--inline icon-sm" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

              <p class="font-size-smaller">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="#"><svg class="icon icon--inline icon-xs" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="#">Another inline icon&nbsp;<svg class="icon icon--inline icon-xs" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

            </div>
          </section>

          {/* BUTTONS */}

          <section class="section section--styleguide" id="buttons">
            <div class="container">

              <h2>Buttons</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_buttons.scss</code></em></p>

              <div class="row styleguide-buttons">
                <div class="col-xs-6 col-sm-4 col-md-3">
                  <h3 class="styleguide-h3">Colors</h3>
                  <button class="btn">.btn</button>
                  <button class="btn btn-default">.btn-default</button>
                  <button class="btn btn-black">.btn-black</button>
                  <button class="btn btn-gray">.btn-gray</button>
                  <button class="btn btn-white">.btn-white</button>
                  <button class="btn btn-primary">.btn-primary</button>
                  <button class="btn btn-secondary">.btn-secondary</button>
                  <button class="btn btn-accent">.btn-accent</button>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-3">
                  <h3 class="styleguide-h3">Rounded</h3>
                  <button class="btn btn-round">.btn-round</button>
                  <button class="btn btn-default btn-round">.btn-round</button>
                  <button class="btn btn-black btn-round">.btn-round</button>
                  <button class="btn btn-gray btn-round">.btn-round</button>
                  <button class="btn btn-white btn-round">.btn-round</button>
                  <button class="btn btn-primary btn-round">.btn-round</button>
                  <button class="btn btn-secondary btn-round">.btn-round</button>
                  <button class="btn btn-accent btn-round">.btn-round</button>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-3">
                  <h3 class="styleguide-h3">Hollow</h3>
                  <button class="btn btn-hollow">.btn-hollow</button>
                  <div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
                    <button class="btn btn-default btn-hollow">.btn-hollow</button>
                  </div>
                  <button class="btn btn-black btn-hollow">.btn-hollow</button>
                  <button class="btn btn-gray btn-hollow">.btn-hollow</button>
                  <div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
                    <button class="btn btn-white btn-hollow">.btn-hollow</button>
                  </div>
                  <button class="btn btn-primary btn-hollow">.btn-hollow</button>
                  <button class="btn btn-secondary btn-hollow">.btn-hollow</button>
                  <button class="btn btn-accent btn-hollow">.btn-hollow</button>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-3">
                  <h3 class="styleguide-h3">Rounded hollow</h3>
                  <button class="btn btn-round btn-hollow">.btn-hollow</button>
                  <div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
                    <button class="btn btn-default btn-round btn-hollow">
                      .btn-hollow
                    </button>
                  </div>
                  <button class="btn btn-black btn-round btn-hollow">
                    .btn-hollow
                  </button>
                  <button class="btn btn-gray btn-round btn-hollow">.btn-hollow</button>
                  <div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
                    <button class="btn btn-white btn-round btn-hollow">
                      .btn-hollow
                    </button>
                  </div>
                  <button class="btn btn-primary btn-round btn-hollow">
                    .btn-hollow
                  </button>
                  <button class="btn btn-secondary btn-round btn-hollow">
                    .btn-hollow
                  </button>
                  <button class="btn btn-accent btn-round btn-hollow">
                    .btn-hollow
                  </button>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-3">
                  <h3 class="styleguide-h3">Sizes</h3>
                  <button class="btn btn-primary btn-xs">.btn-xs</button>
                  <button class="btn btn-primary btn-sm">.btn-sm</button>
                  <button class="btn btn-primary">.btn</button>
                  <a href="#" class="btn btn-primary btn-lg">.btn-lg</a>
                  <button class="btn btn-primary btn-xl">.btn-xl</button>

                  <h3 class="styleguide-h3">Layout</h3>
                  <button class="btn btn-primary btn-block">.btn-block</button>
                  <button class="btn btn-secondary btn-wrap">
                    .btn-wrap very very long button multi-line content
                  </button>
                  <button class="btn btn-black btn-wrap btn-round">
                    .btn-wrap rounded very very long button multi-line content
                  </button>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-3">
                  <h3 class="styleguide-h3">Background grow</h3>
                  <button class="btn btn-bg-grow">.bg-grow</button>
                  <button class="btn btn-bg-grow">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>
                  <button class="btn btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  <button class="btn btn-default btn-bg-grow btn-round">.bg-grow default</button>
                  <button class="btn btn-default btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  {/* <div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
                  </div> */}
                  <button class="btn btn-black btn-bg-grow">.bg-grow black</button>
                  <button class="btn btn-black btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>
                  <button class="btn btn-gray btn-bg-grow">.bg-grow gray</button>
                  <button class="btn btn-gray btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>
                  <button class="btn btn-white btn-bg-grow">.bg-grow white</button>
                  <button class="btn btn-white btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>
                  <button class="btn btn-primary btn-bg-grow">.bg-grow primary</button>
                  <button class="btn btn-primary btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>
                  <button class="btn btn-secondary btn-bg-grow btn-round">.bg-grow secondary</button>
                  <button class="btn btn-secondary btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>
                  <button class="btn btn-accent btn-bg-grow">.bg-grow accent</button>
                  <button class="btn btn-accent btn-bg-grow btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>

                  <h3 class="styleguide-h3">Disabled</h3>
                  <button class="btn" disabled="disabled">disabled</button>
                  <button class="btn btn-default" disabled="disabled">disabled</button>
                  <button class="btn btn-black" disabled="disabled">disabled</button>
                  <button class="btn btn-gray" disabled="disabled">disabled</button>
                  <button class="btn btn-white" disabled="disabled">disabled</button>
                  <button class="btn btn-primary btn-round" disabled="disabled">
                    disabled
                  </button>
                  <button class="btn btn-secondary btn-hollow" disabled="disabled">
                    disabled
                  </button>
                  <button class="btn btn-accent" disabled="disabled">disabled</button>
                </div>
                {/* <div class="col-xs-6 col-sm-4 col-md-3">
                </div> */}
                <div class="col-xs-12 col-md-6">
                  <h3 class="styleguide-h3">Icons</h3>
                  <button class="btn">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                    &nbsp;
                    MENU</button>
                  <button class="btn btn-default">
                    .btn-default
                    &nbsp;
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-percent"></use>
                    </svg>
                  </button>
                  <button class="btn btn-black btn-block btn-round">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-dots"></use>
                    </svg>
                    &nbsp;
                    .btn-black
                  </button>
                  <button class="btn btn-secondary btn-sm btn-wrap">
                    .btn-wrap very very long button multi-line content
                    &nbsp;
                    <svg class="icon icon-xl" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  <button class="btn btn-gray btn-lg">
                    .btn-gray
                    &nbsp;
                    <svg class="icon icon-lg" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  <button class="btn btn-primary btn-xs">
                    <svg class="icon icon-xs" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-percent"></use>
                    </svg>
                  </button>
                  <button class="btn btn-white">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-arrow-left"></use>
                    </svg>&nbsp;
                    .btn-white
                  </button>
                  <button class="btn btn-primary btn-round btn-hollow">
                    .btn-primary
                    &nbsp;
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-arrow-right"></use>
                    </svg>
                  </button>
                  <br />
                  <button class="btn btn-secondary btn-xs">
                    .btn-xs&nbsp;
                    <svg class="icon icon-xs" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-arrow-right"></use>
                    </svg>
                  </button>
                  <button class="btn btn-accent btn-xs">
                    <svg class="icon icon-xs" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-arrow-left"></use>
                    </svg>
                  </button>
                  <br />
                  <button class="btn btn-secondary btn-sm btn-round">
                    .btn-sm&nbsp;
                    <svg class="icon icon-sm" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  <button class="btn btn-accent btn-sm btn-round">
                    <svg class="icon icon-sm" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-percent"></use>
                    </svg>
                  </button>
                  <br />
                  <button class="btn btn-secondary">
                    .btn&nbsp;
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  <button class="btn btn-accent">
                    <svg class="icon" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </button>
                  <br />
                  <button class="btn btn-secondary btn-lg btn-hollow">
                    .btn-lg&nbsp;
                    <svg class="icon icon-lg" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  <button class="btn btn-accent btn-lg btn-hollow">
                    <svg class="icon icon-lg" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-dots"></use>
                    </svg>
                  </button>
                  <br />
                  <button class="btn btn-secondary btn-xl">
                    .btn-xl&nbsp;
                    <svg class="icon icon-xl" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-menu"></use>
                    </svg>
                  </button>
                  <button class="btn btn-accent btn-xl">
                    <svg class="icon icon-xl" viewBox="0 0 24 24">
                      <use xlinkHref="#icon-dots"></use>
                    </svg>
                  </button>
                </div>
                {/* <div class="col-xs-6 col-sm-4 col-md-3">
                            <h3 class="styleguide-h3">Caret</h3>
                            <button class="btn btn-default btn-caret">.btn-caret</button>
                            <button class="btn btn-primary btn-caret btn-xs">.btn-caret</button>
                            <button class="btn btn-black btn-caret btn-round btn-xl">
                              .btn-caret
                            </button>
                            <div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
                              <button class="btn btn-white btn-caret btn-hollow btn-block">
                                .btn-caret
                              </button>
                            </div>
                            <button class="btn btn-secondary btn-caret btn-wrap">
                              .btn-caret very very long button multi-line content
                            </button>
                          </div> */}
              </div>

            </div>
          </section>

          {/* TABS */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Tabs</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/components/_tabs.scss</code> and <code>js/lib/tabs.js</code></em></p>

              <div class="styleguide-tabs-toggles">
                <button class="tab-toggle btn active" data-tabs-toggle data-tabs-group="my-tabs" data-tabs-target="#my_tab_1">Tab #1</button>
                <button class="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs" data-tabs-target="#my_tab_2">Tab #2</button>
                <button class="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs" data-tabs-target="#my_tab_3">Tab #3</button>
              </div>

              <div class="styleguide-tabs-contents">
                <div class="tab-content active" id="my_tab_1" data-tabs-content data-tabs-group="my-tabs">
                  <h3>Tab #1</h3>

                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque error minus sed saepe eveniet provident officiis rerum sequi.</p>
                </div>

                <div class="tab-content" id="my_tab_2" data-tabs-content data-tabs-group="my-tabs">
                  <h3>Tab #2</h3>

                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, unde quod. Accusantium ratione aliquid eius veniam consequatur soluta, corrupti, obcaecati ipsa suscipit animi veritatis cumque tenetur error blanditiis aut molestiae commodi laborum! Molestiae, mollitia quas.</p>
                </div>

                <div class="tab-content" id="my_tab_3" data-tabs-content data-tabs-group="my-tabs">
                  <h3>Tab #3</h3>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem eligendi natus rerum cumque sed consequuntur cupiditate velit nesciunt, inventore nobis quam qui dignissimos unde veniam illo minima temporibus doloribus!</p>
                </div>
              </div>

              <div class="styleguide-tabs-toggles">
                <button class="tab-toggle btn active" data-tabs-toggle data-tabs-group="my-tabs-2" data-tabs-target="#my_tab_4">Tab #4</button>
                <button class="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs-2" data-tabs-target="#my_tab_5">Tab #5</button>
                <button class="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs-2" data-tabs-target="#my_tab_6">Tab #6</button>
              </div>

              <div class="styleguide-tabs-contents">
                <div class="tab-content active" id="my_tab_4" data-tabs-content data-tabs-group="my-tabs-2">
                  <h3>Tab #4</h3>

                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque error minus sed saepe eveniet provident officiis rerum sequi.</p>
                </div>

                <div class="tab-content" id="my_tab_5" data-tabs-content data-tabs-group="my-tabs-2">
                  <h3>Tab #5</h3>

                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, unde quod. Accusantium ratione aliquid eius veniam consequatur soluta, corrupti, obcaecati ipsa suscipit animi veritatis cumque tenetur error blanditiis aut molestiae commodi laborum! Molestiae, mollitia quas.</p>
                </div>

                <div class="tab-content" id="my_tab_6" data-tabs-content data-tabs-group="my-tabs-2">
                  <h3>Tab #6</h3>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem eligendi natus rerum cumque sed consequuntur cupiditate velit nesciunt, inventore nobis quam qui dignissimos unde veniam illo minima temporibus doloribus!</p>
                </div>
              </div>

            </div>
          </section>

          {/* SHADOWS */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Shadows</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_shadows.scss</code></em></p>

              <div class="row">
                <div class="col-xxs-6 col-sm-3">
                  <div class="styleguide-shadow-block shadow-0">.shadow-0</div>
                </div>
                <div class="col-xxs-6 col-sm-3">
                  <div class="styleguide-shadow-block shadow-1">.shadow-1</div>
                </div>
                <div class="col-xxs-6 col-sm-3">
                  <div class="styleguide-shadow-block shadow-2">.shadow-2</div>
                </div>
                <div class="col-xxs-6 col-sm-3">
                  <div class="styleguide-shadow-block shadow-3">.shadow-3</div>
                </div>
                <div class="col-xxs-6 col-sm-3">
                  <div class="styleguide-shadow-block shadow-4">.shadow-4</div>
                </div>
                <div class="col-xxs-6 col-sm-3">
                  <div class="styleguide-shadow-block shadow-5">.shadow-5</div>
                </div>
              </div>

            </div>
          </section>

          {/* CAPPED WIDTH */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Capped width</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/layout/_capped-width.scss</code></em></p>

              <h3 class="styleguide-h3">.max-width-xs</h3>
              <p class="max-width-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque perspiciatis perferendis, voluptate enim aut, magni optio laborum dolorem placeat voluptatibus quis quia. Debitis nihil, quod unde incidunt, impedit, assumenda a corporis rem id eligendi aspernatur error explicabo excepturi? Quas cumque, natus quaerat iste nam sunt sint cum quis perspiciatis adipisci, suscipit error ut praesentium dolorem modi exercitationem unde velit laboriosam! Velit, veniam sint? Ullam nobis provident reprehenderit, nisi earum quae neque minima, aspernatur commodi debitis omnis sed veritatis quam ipsum ipsam, quaerat repellat recusandae. Qui consequuntur necessitatibus eveniet facilis doloremque.</p>

              <h3 class="styleguide-h3">.max-width-sm</h3>
              <p class="max-width-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque perspiciatis perferendis, voluptate enim aut, magni optio laborum dolorem placeat voluptatibus quis quia. Debitis nihil, quod unde incidunt, impedit, assumenda a corporis rem id eligendi aspernatur error explicabo excepturi? Quas cumque, natus quaerat iste nam sunt sint cum quis perspiciatis adipisci, suscipit error ut praesentium dolorem modi exercitationem unde velit laboriosam! Velit, veniam sint? Ullam nobis provident reprehenderit, nisi earum quae neque minima, aspernatur commodi debitis omnis sed veritatis quam ipsum ipsam, quaerat repellat recusandae. Qui consequuntur necessitatibus eveniet facilis doloremque. Dolores officia quaerat consequuntur, nemo accusantium accusamus ipsum, ex, explicabo aspernatur quam odit quod aperiam magni culpa tenetur? Nihil magni magnam nobis dolorum illo quo debitis et accusamus ratione.</p>

              <h3 class="styleguide-h3">.max-width-md</h3>
              <p class="max-width-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque perspiciatis perferendis, voluptate enim aut, magni optio laborum dolorem placeat voluptatibus quis quia. Debitis nihil, quod unde incidunt, impedit, assumenda a corporis rem id eligendi aspernatur error explicabo excepturi? Quas cumque, natus quaerat iste nam sunt sint cum quis perspiciatis adipisci, suscipit error ut praesentium dolorem modi exercitationem unde velit laboriosam! Velit, veniam sint? Ullam nobis provident reprehenderit, nisi earum quae neque minima, aspernatur commodi debitis omnis sed veritatis quam ipsum ipsam, quaerat repellat recusandae. Qui consequuntur necessitatibus eveniet facilis doloremque. Dolores officia quaerat consequuntur, nemo accusantium accusamus ipsum, ex, explicabo aspernatur quam odit quod aperiam magni culpa tenetur? Nihil magni magnam nobis dolorum illo quo debitis et accusamus ratione.</p>

            </div>
          </section>

          {/* FIXED RATIO */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Fixed ratio blocks</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/layout/_fixed-ratio.scss</code></em></p>

              <h3 class="styleguide-h3">Square ratio</h3>
              <div class="max-width-xxs">
                <div class="fixed-ratio fixed-ratio--1by1" style="background-color: tomato;">
                </div>
              </div>

              <h3 class="styleguide-h3">16/9 ratio, responsive media embed</h3>
              <div class="max-width-xs">
                <div class="fixed-ratio fixed-ratio--16by9" style="background-color: lightseagreen;">
                  {/* <iframe src="https://www.youtube.com/embed/jbi9HEz-cww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>
              </div>

            </div>
          </section>

          {/* MODAL AND OVERLAY */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Modal and overlay</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_modal.scss</code> and <code>js/lib/modal.js</code></em></p>

              <button class="btn btn-primary" data-toggle="modal" data-target="#modal_1">Small modal</button>

              <button class="btn btn-secondary" data-toggle="modal" data-target="#modal_2">Default modal</button>

              <button class="btn btn-accent" data-toggle="modal" data-target="#modal_3">Large modal</button>

            </div>
          </section>

          {/* TOGGLE */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Toggle helper</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>js/lib/toggle.js</code></em></p>

              <p>
                <button class="btn btn-default" data-toggle data-toggle-classname="btn-primary">Toggle me</button>
              </p>

              <p>
                <button class="btn btn-secondary" data-toggle=".styleguide-toggle-target">Togglers with targets</button>
                <button class="btn btn-secondary" data-toggle=".styleguide-toggle-target">Togglers with targets</button>
              </p>
              <div class="row">
                <div class="col-xs-6">
                  <div class="styleguide-toggle-target margin-bottom-half">I'm the target</div>
                </div>
                <div class="col-xs-6">
                  <div class="styleguide-toggle-target">Me too</div>
                </div>
              </div>

            </div>
          </section>

          {/* SCROLLER */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Scroller helper</h2>
              <p class="styleguide-p-sourcecode"><em>Source code: <code>js/lib/scroller.js</code></em></p>

              <p>
                <button class="btn btn-default" data-scroll="#colors">Scroll to #colors section</button>
              </p>

              <p>
                Note: all links to local anchors like <code>&lt;a href="#foo"&gt;</code> are automatically scrollers by default.
              </p>

            </div>
          </section>

          {/* SLIDER DEMO */}

          <section class="section section--styleguide">

            <div class="container">
              <h2>Slider demo</h2>
            </div>

            <div class="styleguide-tiny-slider tiny-slider">
              <div class="tiny-slide">Slide 1</div>
              <div class="tiny-slide">Slide 2</div>
              <div class="tiny-slide">Slide 3</div>
              <div class="tiny-slide">Slide 4</div>
              <div class="tiny-slide">Slide 5</div>
            </div>

          </section>

          {/* IMAGE TESTS */}

          <section class="section section--styleguide">
            <div class="container">

              <h2>Image test</h2>
              <div class="styleguide-image-test">
                <img src="dist/img/static/logo-diatem.jpg" alt="An image" />
              </div>
              <div class="styleguide-image-test">
                <img src="dist/img/static/logo-diatem-flipped.png" alt="An image" />
              </div>

              <h2>Background image test</h2>
              <div class="styleguide-bg-image-test styleguide-bg-image-test--1"></div>
              <div class="styleguide-bg-image-test styleguide-bg-image-test--2"></div>

            </div>
          </section>

          {/* End of styleguide content */}
        </main>

        {/* SITE FOOTER */}

        <footer class="site-footer">

          {/* PRE-FOOTER */}

          {/* <section class="section section--pre-footer">
                      <div class="container">
                        <div>This is the pre-footer section</div>
                      </div>
                    </section> */}

          {/* FOOTER */}

          {/* <section class="section section--footer">
                      <div class="container">
                        <div>This is the footer section</div>
                      </div>
                    </section> */}

          {/* POST-FOOTER */}

          <section class="section section--post-footer">
            <div class="container">
              <div class="footer-made-by">
                <em>Made with ♥ by&nbsp;</em>
                <a href="https://diatem.net" target="_blank" class="footer-made-by__link">
                  <svg viewBox="0 0 200 56" width="75" height="21">
                    <use xlinkHref="#logo-diatem--no-baseline--no-color"></use>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </footer>

      </div>{/* End .site-wrapper */}

      {/* OVERLAY AND MODAL */}

      {/* Overlay */}
      <div class="overlay" id="overlay"></div>

      {/* Small modal */}
      <dialog class="modal modal-sm" id="modal_1" role="dialog" aria-labelledby="modal_1-title" aria-hidden="true">
        <div class="modal__header">
          <div class="modal__title h3" id="modal_1-title">Small Modal title</div>
          <button class="modal__btn-close" data-modal="close">
            <svg class="icon icon-lg" viewBox="0 0 24 24">
              <use xlinkHref="#icon-close"></use>
            </svg>
            <span class="sr-only">Close</span>
          </button>
        </div>
        <div class="modal__body">
          <p>Short confirmation message</p>
        </div>
        <div class="modal__footer">
          <button class="modal__btn-dismiss" data-modal="close">Decline</button>
          <button class="modal__btn-accept" data-modal="close" data-modal-focus>Accept</button>
        </div>
      </dialog>

      {/* Default modal */}
      <dialog class="modal" id="modal_2" role="dialog" aria-labelledby="modal_2-title" aria-hidden="true">
        <div class="modal__header">
          <div class="modal__title h3" id="modal_2-title">Default modal title</div>
          <button class="modal__btn-close" data-modal="close">
            <svg class="icon icon-lg" viewBox="0 0 24 24">
              <use xlinkHref="#icon-close"></use>
            </svg>
            <span class="sr-only">Close</span>
          </button>
        </div>
        <div class="modal__body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
        </div>
        <div class="modal__footer">
          <button class="modal__btn-dismiss" data-modal="close">Decline</button>
          <button class="modal__btn-accept btn-secondary" data-modal="close" data-modal-focus>Accept</button>
        </div>
      </dialog>

      {/* Large modal */}
      <dialog class="modal modal-lg" id="modal_3" role="dialog" aria-labelledby="modal_3-title" aria-hidden="true">
        <div class="modal__header">
          <div class="modal__title h3" id="modal_3-title">Large modal title</div>
          <button class="modal__btn-close btn btn-round btn-bg-grow" data-modal="close">
            <svg class="icon icon-lg" viewBox="0 0 24 24">
              <use xlinkHref="#icon-close"></use>
            </svg>
            <span class="sr-only">Close</span>
          </button>
        </div>
        <div class="modal__body">
          <div class="input-block">
            <label for="text1000">Text input</label>
            <div class="input">
              <input type="text" id="text1000" placeholder="This one has focus" data-modal-focus />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error repellendus, alias inventore
            accusantium reiciendis, voluptas, consequuntur assumenda aliquid quos vitae officia delectus
            necessitatibus nihil suscipit. Incidunt suscipit modi doloremque.</p>
        </div>
        <div class="modal__footer">
          <button class="modal__btn-dismiss" data-modal="close">Decline</button>
          <button class="modal__btn-accept btn-accent" data-modal="close" data-modalfocus>Accept</button>
        </div>
      </dialog>

      {/* DEBUG ZONE */}
      <div class="debug-zone">
        <div class="debug-zone__item debug-zone__item--screen-width js-debug-item-screen-width">0</div>
        <div class="debug-zone__item debug-zone__item--bp"></div>
      </div>

      {/* INLINE SVG SPRITES */}
      {/* <div id="svg-sprites"> */}

      {/* STATIC SVG SPRITES
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol viewBox="0 0 6.35 6.35" id="icon-arrow-down-stroke"><g fill="none" stroke="#000" stroke-width=".529"><path d="M3.175 295.67706L5.0270833 293.82498 3.1750001 291.9729M5.0270833 293.82498h-3.96875" transform="rotate(90 148.5 148.5)" /></g></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-arrow-left"><path d="M 11.294922 4.2910156 L 3.5898438 11.998047 L 11.294922 19.703125 L 12.705078 18.292969 L 7.4199219 13.001953 L 19.998047 13.001953 L 19.998047 11 L 7.4140625 11 L 12.705078 5.7070312 L 11.294922 4.2910156 z" transform="matrix(.26458 0 0 .26458 0 0)" /></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-arrow-left-stroke"><g fill="none" stroke="#000" stroke-width=".529"><path d="M3.175 295.67706L5.0270833 293.82498 3.1750001 291.9729M5.0270833 293.82498h-3.96875" transform="matrix(-1 0 0 1 6.35 -290.65)" /></g></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-arrow-right"><path d="M 12.705078 4.2910156 L 11.294922 5.7070312 L 16.585938 11 L 4.0019531 11 L 4.0019531 13.001953 L 16.580078 13.001953 L 11.294922 18.292969 L 12.705078 19.703125 L 20.410156 11.998047 L 12.705078 4.2910156 z" transform="scale(.26458)" /></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-arrow-right-stroke"><g fill="none" stroke="#000" stroke-width=".529"><path d="M3.175 295.67706L5.0270833 293.82498 3.1750001 291.9729M5.0270833 293.82498h-3.96875" transform="translate(0 -290.65)" /></g></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-cart"><g paint-order="markers fill stroke"><path d="M 6,8.0000001 C 4.8919667,8.0000001 4,8.8919668 4,10 v 8 c 0,1.108033 0.8919667,2 2,2 h 12 c 1.108033,0 2,-0.891967 2,-2 V 10 C 20,8.8919668 19.108033,8.0000001 18,8.0000001 Z M 6,10 h 12 v 8 H 6 Z" transform="scale(.26458)" /><path d="m 3.175,291.70832 a 1.0583332,1.0583332 0 0 0 -1.0583334,1.05833 H 2.6458333 A 0.52916663,0.52916663 0 0 1 3.175,292.23749 0.52916663,0.52916663 0 0 1 3.7041666,292.76665 H 4.2333333 A 1.0583332,1.0583332 0 0 0 3.175,291.70832 Z" transform="translate(0 -290.65)" /></g></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-close"><path d="M 6.7109375 5.2949219 L 5.2929688 6.7050781 L 10.585938 11.998047 L 5.2929688 17.289062 L 6.7109375 18.707031 L 12.001953 13.414062 L 17.294922 18.707031 L 18.705078 17.289062 L 13.414062 11.998047 L 18.705078 6.7050781 L 17.294922 5.2949219 L 12.001953 10.585938 L 6.7109375 5.2949219 z" transform="scale(.26458)" /></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-close-stroke"><g fill="none" stroke="#000" stroke-width=".529"><path d="M1.5875 292.23748l3.1749999 3.175M1.5875 295.41248l3.1749999-3.175" transform="translate(0 -290.65)" /></g></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-dots"><path d="M3.7041666 293.82498A.52916664.52916664 0 013.175 294.35415.52916664.52916664 0 012.6458333 293.82498.52916664.52916664 0 013.175 293.29582a.52916664.52916664 0 01.5291666.52916zM3.7041666 291.70831A.52916664.52916664 0 013.175 292.23748.52916664.52916664 0 012.6458333 291.70831.52916664.52916664 0 013.175 291.17915a.52916664.52916664 0 01.5291666.52916zM3.7041666 295.94165A.52916664.52916664 0 013.175 296.47082.52916664.52916664 0 012.6458333 295.94165.52916664.52916664 0 013.175 295.41248a.52916664.52916664 0 01.5291666.52917z" transform="translate(0 -290.65)" /></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-menu"><path d="M1.058 293.56H5.2909999999999995V294.089H1.058zM1.058 291.973H5.2909999999999995V292.502H1.058zM1.058 295.148H5.2909999999999995V295.677H1.058z" transform="translate(0 -290.65)" /></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-percent"><path d="M4.8398438 291.78516l-3.703125 3.70507.3730468.37305 3.7050782-3.70312zM1.984375 291.70898c-.5083057 0-.9257825.41748-.9257812.92579-.0000013.5083.4174755.92578.9257812.92578.5083057 0 .9257825-.41748.9257812-.92578.0000013-.50831-.4174755-.92579-.9257812-.92579zm0 .5293c.2223223 0 .3964849.17416.3964844.39649 5e-7.22232-.1741621.39648-.3964844.39648-.2223223 0-.3964849-.17416-.3964844-.39648-5e-7-.22233.1741621-.39649.3964844-.39649zM4.3652344 294.08984c-.5083057 0-.9257826.41748-.9257813.92578-.0000013.50831.4174756.92579.9257813.92579.5083056 0 .9257825-.41748.9257812-.92579.0000013-.5083-.4174756-.92578-.9257812-.92578zm0 .5293c.2223223 0 .3964849.17416.3964844.39648 5e-7.22233-.1741621.39649-.3964844.39649-.2223223 0-.396485-.17416-.3964844-.39649-6e-7-.22232.1741621-.39648.3964844-.39648z" transform="translate(0 -290.65)" /></symbol><symbol viewBox="0 0 6.35 6.35" id="icon-percent-alt-stroke"><g fill="none" stroke="#000" stroke-width=".529"><path d="M 1.3229167,295.67706 5.0270833,291.9729" transform="translate(0 -290.65)" /><path d="M2.6458333 292.63437a.66145831.66145831 0 01-.6614583.66146.66145831.66145831 0 01-.6614583-.66146.66145831.66145831 0 01.6614583-.66146.66145831.66145831 0 01.6614583.66146zM5.0270833 295.0156A.66145831.66145831 0 014.365625 295.67706.66145831.66145831 0 013.7041667 295.0156.66145831.66145831 0 014.365625 294.35414.66145831.66145831 0 015.0270833 295.0156z" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -290.65)" /></g></symbol><symbol viewBox="0 0 630.7 237.9" id="logo-desktop"><g fill="#fff"><path class="st0000" d="M252 170.8c0 2.1-.5 3.6-1.6 4.3-1 .8-2.6 1.2-4.7 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.6-2.2-1.6-4.3v-6.7c-2.2 3.8-5.5 7-9.9 9.6-4.4 2.6-9.8 3.9-16.2 3.9-5.5 0-10.4-1-14.6-2.9-4.2-1.9-7.8-4.6-10.8-8-3-3.4-5.2-7.5-6.7-12.3-1.5-4.8-2.3-10-2.3-15.7 0-5.7.8-10.9 2.3-15.7 1.5-4.7 3.8-8.8 6.7-12.2 3-3.4 6.6-6 10.8-7.9s9.1-2.8 14.6-2.8c3.2 0 6.2.4 9 1.2 2.8.8 5.2 1.7 7.4 2.9 2.1 1.2 4 2.5 5.6 4 1.6 1.5 2.8 3 3.6 4.4V79.4c0-2.2.6-3.7 1.8-4.6 1.2-.8 2.8-1.2 4.9-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.7 2.3 1.7 4.6V170.8zM192.9 139.1c0 8.4 2 15.1 5.9 20.1 4 5 9.6 7.5 17 7.5 3.8 0 7.1-.7 10-2.1 2.9-1.4 5.4-3.4 7.4-5.9 2-2.5 3.5-5.5 4.5-8.9 1-3.4 1.5-7.2 1.5-11.2 0-8.6-2.1-15.3-6.3-20.2-4.2-4.9-10-7.3-17.5-7.3-3.8 0-7 .7-9.9 2-2.8 1.4-5.2 3.3-7 5.7-1.9 2.5-3.3 5.4-4.2 8.8C193.3 131.2 192.9 135 192.9 139.1zM268.4 81.5c0-2.5.8-4.5 2.4-5.9 1.6-1.4 3.6-2.1 6-2.1 2.4 0 4.4.7 6 2.1 1.6 1.4 2.4 3.4 2.4 5.9 0 2.5-.8 4.5-2.4 5.9-1.6 1.4-3.6 2.1-6 2.1-2.4 0-4.4-.7-6-2.1C269.2 85.9 268.4 84 268.4 81.5zM270.3 107.3c0-2.2.6-3.7 1.7-4.6 1.1-.8 2.8-1.2 4.8-1.2 2.1 0 3.7.4 4.9 1.2 1.2.8 1.8 2.3 1.8 4.6v63.2c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107.3zM352.2 129.9V127c0-5.5-1.5-9.6-4.6-12.3-3.1-2.7-8.1-4.1-14.9-4.1-2.7 0-5.1.3-7 .9-2 .6-3.7 1.3-5.1 2-1.4.8-2.6 1.6-3.4 2.5-.9.9-1.6 1.6-2.3 2.3-1 1.2-1.9 1.9-2.7 2.3-.7.4-1.7.6-2.8.6-1.7 0-3.2-.5-4.6-1.4-1.4-.9-2.1-2.1-2.1-3.6 0-.8.1-1.4.2-1.9.2-.5.4-1 .7-1.6.1-.3.7-1.1 1.9-2.5 1.1-1.4 2.9-2.8 5.2-4.3 2.3-1.5 5.4-2.9 9.1-4.1 3.7-1.2 8.2-1.8 13.5-1.8 5.9 0 11 .7 15.1 2.1 4.1 1.4 7.4 3.3 9.9 5.6s4.3 5 5.5 8c1.1 3 1.7 6.2 1.7 9.5v46.2c0 3.2-2.2 4.8-6.7 4.8-3 0-4.9-.6-5.6-1.9-.7-1.3-1-3-1-5.2v-4.3c-1 1.4-2.3 2.8-3.8 4.2-1.5 1.5-3.3 2.8-5.4 4-2.1 1.2-4.7 2.2-7.7 3-3 .8-6.4 1.2-10.2 1.2-4.7 0-8.7-.5-12.1-1.6-3.4-1.1-6.2-2.5-8.4-4.4-2.2-1.9-3.9-4.1-5-6.7-1.1-2.6-1.6-5.3-1.6-8.2 0-3.8.7-7.2 2.2-10.4 1.5-3.2 4-5.9 7.5-8.2 3.5-2.3 8.3-4.1 14.2-5.4 5.9-1.3 13.3-2.1 22.3-2.2L352.2 129.9zM343.6 139.8c-6.7.1-12.1.5-16.3 1.3-4.2.8-7.5 1.8-9.9 3.1-2.4 1.3-4 2.9-4.9 4.7-.9 1.8-1.3 3.9-1.3 6.2 0 3.3 1.2 6.1 3.7 8.5 2.4 2.4 6.5 3.6 12.1 3.6 4.9 0 9.4-1 13.4-3.1 4-2.1 7.1-4.7 9.2-7.8 1.8-2.6 2.7-6.1 2.7-10.6v-6.1L343.6 139.8zM379.6 112.9c-2.1 0-3.5-.5-4.2-1.4-.7-.9-1.1-2.2-1.1-3.8 0-1.6.4-2.9 1.1-3.8.7-.9 2.1-1.4 4.2-1.4h7V87.6c0-1.8.2-3.2.5-4.1.4-.9 1.1-1.6 2.3-2.3 1.9-1.1 3.9-1.6 6.1-1.6 2.9 0 4.4 1.4 4.4 4.2v18.7h14.7c2.1 0 3.5.5 4.2 1.4.7.9 1.1 2.2 1.1 3.8 0 1.6-.4 2.9-1.1 3.8-.7.9-2.1 1.4-4.2 1.4H400v42.9c0 4.3.7 7.2 2.1 8.7 1.4 1.5 3.8 2.3 7.1 2.3 1.3 0 2.3-.1 3.2-.4.9-.3 1.7-.6 2.4-.9.7-.3 1.4-.6 2.1-.9.7-.3 1.5-.4 2.4-.4 1.5 0 2.7.6 3.8 1.7 1.1 1.2 1.6 2.6 1.6 4.2 0 2.3-1.6 4.1-4.8 5.4-3.2 1.3-7.3 2-12.2 2-7.2 0-12.5-1.6-16-4.9-3.4-3.2-5.2-7.9-5.2-14.1v-45.7H379.6zM500.5 137.1c0 3.5-2.1 5.2-6.4 5.2h-53.2c0 7.8 2.1 13.9 6.3 18.1 4.2 4.3 10.2 6.4 17.9 6.4 3 0 5.7-.4 7.9-1.1 2.2-.7 4.1-1.6 5.7-2.6 1.6-1 2.8-2.1 3.8-3.1 1-1.1 1.8-2 2.4-2.8.7-1 1.4-1.7 2.1-2.2.7-.5 1.7-.7 3-.7 1.5 0 2.9.4 4.3 1.3 1.4.9 2.1 2 2.1 3.5 0 1.3-.6 2.8-1.7 4.5-.9 1.4-2.2 2.8-3.7 4.4-1.5 1.6-3.4 3.1-5.8 4.6-2.3 1.5-5.2 2.7-8.5 3.6-3.3 1-7.2 1.5-11.7 1.5-5.8 0-11.1-.9-15.9-2.8-4.7-1.9-8.8-4.5-12.1-8-3.3-3.4-5.9-7.5-7.7-12.3-1.8-4.8-2.7-10-2.7-15.7 0-5.8.9-11.1 2.7-15.8 1.8-4.7 4.3-8.8 7.6-12.2 3.3-3.4 7.2-6.1 11.9-8 4.6-1.9 9.8-2.8 15.6-2.8 5.8 0 11 .9 15.5 2.8 4.5 1.9 8.2 4.5 11.3 7.8 3 3.3 5.3 7.3 6.9 11.8C499.7 127 500.5 131.9 500.5 137.1zM464.6 110.6c-3.7 0-6.8.6-9.5 1.7-2.7 1.1-5 2.6-6.9 4.5s-3.4 4.1-4.5 6.7c-1.1 2.6-1.8 5.2-2.1 8h45.5c-.3-2.7-1-5.3-2-7.9-1-2.6-2.4-4.8-4.2-6.7-1.8-1.9-4.1-3.4-6.8-4.6C471.4 111.2 468.2 110.6 464.6 110.6zM602.4 100c8.2 0 14.8 2.1 19.6 6.2 4.8 4.1 7.2 10.4 7.2 18.9v46.1c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.9-10.2 2.6-2.7 1.7-4.8 4-6.4 6.7-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v31.5c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.8-10.2 2.5-2.7 1.7-4.8 3.9-6.4 6.6-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v30.9c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107c0-2.1.5-3.6 1.6-4.3 1-.8 2.6-1.2 4.7-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.6 2.2 1.6 4.3v6.8c.1-.4.5-1.3 1.3-2.6.8-1.5 2.2-3.1 4.1-4.8 1.9-1.6 4.4-3.1 7.6-4.4 3.2-1.3 7.2-2 12-2 6.4 0 11.5 1.2 15.6 3.6 4 2.4 6.9 5.6 8.7 9.6 2.2-4 5.6-7.2 10.2-9.6C590.7 101.2 596.1 100 602.4 100z" /></g><path d="M138.9,105L72.6,36.6c-4.4-4.5-11.9-5-16.8-1.1C29.7,56.2,16.9,73.9,2.4,106.4c-6.7,15.1,1.4,28.5,17.9,29.7 l103,20.4c6,0.4,12.3-3.9,13.9-9.7l6.5-23.4C145.2,117.6,143.1,109.3,138.9,105z" fill="#61c5e8" /><path d="M162.2,72.5l-14.7-59.7C145.7,5.6,138.3-0.4,131,0C116.9,0.9,103,4.1,88,10.4c-6.8,2.8-8.2,10.1-3.5,15.7 l59.2,70.4c4.7,5.6,11.5,5.4,15.1-0.5C162.4,90.1,163.9,79.6,162.2,72.5z" fill="#ed6f30" /><path d="M192.1,70.8l8.7-26.3c3-9.1,0.2-22.2-7.1-28.5c-5-4.3-10.5-8.6-16.1-12.3c-8-5.3-14.7-0.6-14.1,9l2.9,45 c0.6,9.6,5.4,20.1,10.7,23.4C182.4,84.5,189.1,79.9,192.1,70.8z" fill="#80bc49" /><path class="st0000" d="M232.5 217.2c0 1.8-.3 3.4-.8 4.9-.5 1.5-1.3 2.7-2.3 3.7-1 1-2.2 1.8-3.6 2.4-1.4.6-3 .9-4.7.9-1.8 0-3.4-.3-4.8-.8-1.4-.6-2.6-1.4-3.6-2.4-1-1-1.7-2.3-2.3-3.7-.5-1.5-.8-3.1-.8-4.9 0-1.8.3-3.4.8-4.8s1.3-2.7 2.4-3.7c1-1 2.2-1.8 3.6-2.4 1.4-.6 3-.8 4.7-.8 1.7 0 3.3.3 4.7.8 1.4.6 2.6 1.3 3.6 2.3 1 1 1.8 2.2 2.3 3.7C232.2 213.8 232.5 215.4 232.5 217.2zM226.5 217.4c0-2.1-.5-3.8-1.4-5-.9-1.2-2.3-1.8-4-1.8-1.7 0-3 .6-3.9 1.8-1 1.2-1.4 2.9-1.4 5 0 2.1.5 3.8 1.4 5 1 1.2 2.3 1.8 3.9 1.8 1.7 0 3.1-.6 4-1.8C226 221.2 226.5 219.5 226.5 217.4zM249.8 205.5c1.5 0 2.7.2 3.7.7s1.8 1.2 2.6 2c.7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C246.9 205.9 248.2 205.5 249.8 205.5zM276 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C273.1 205.9 274.5 205.5 276 205.5zM299.9 205.5c3.1 0 5.6 1 7.5 2.9 1.8 1.9 2.8 4.7 2.8 8.3 0 .8-.3 1.4-.8 1.7-.5.3-1.2.5-2.1.5h-12.5c.3 3.5 2.2 5.3 5.7 5.3.9 0 1.7-.2 2.3-.5.6-.3 1.2-.6 1.6-.8.4-.2.8-.5 1.2-.7s.8-.3 1.3-.3c.6 0 1.1.3 1.6.9.5.6.7 1.2.7 1.9 0 .5-.2 1-.5 1.4s-.8.8-1.5 1.2c-.9.6-2 1-3.3 1.3-1.3.3-2.5.5-3.8.5-1.8 0-3.4-.2-4.8-.7-1.4-.5-2.7-1.2-3.7-2.1s-1.8-2.1-2.3-3.6c-.5-1.4-.8-3.2-.8-5.1 0-1.5.2-3 .6-4.4s1.1-2.7 2-3.8c.9-1.1 2.1-2 3.5-2.7S298 205.5 299.9 205.5zM304.2 214.5c0-.5-.1-1-.3-1.6-.2-.5-.4-1-.8-1.4-.4-.4-.8-.8-1.4-1-.5-.3-1.2-.4-2-.4-1.2 0-2.3.4-3.2 1.1s-1.4 1.9-1.6 3.3H304.2zM324.8 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C321.6 205.8 323.1 205.5 324.8 205.5zM196.5 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C193.3 205.8 194.9 205.5 196.5 205.5zM344.9 229.1c-1.9 0-3.4-.5-4.5-1.5s-1.7-2.6-1.7-4.7v-12.2h-1.8c-.5 0-.8-.3-1.1-.8-.2-.5-.3-1-.3-1.5 0-.5.1-1 .3-1.4s.6-.7 1.1-.7h1.9v-4.1c0-.5.1-1 .4-1.3s.6-.6.9-.9.8-.4 1.2-.5.9-.2 1.3-.2c.7 0 1.3.2 1.6.5s.5.8.5 1.4v5h3.5c.6 0 1 .2 1.2.6s.3.9.3 1.5c0 1.5-.5 2.3-1.6 2.3h-3.5v11.5c0 .7.1 1.1.4 1.4.2.3.6.4 1.1.4.3 0 .6 0 .9-.2s.5-.2.7-.3l.7-.3c.2-.1.5-.2.8-.2.7 0 1.3.3 1.6.9.3.6.5 1.2.5 1.8 0 .5-.1.9-.2 1.2-.2.4-.4.7-.8.9-.6.4-1.3.7-2.2.9S346.1 229.1 344.9 229.1zM357.9 197.2c.8 0 1.6.3 2.3.8.7.5 1.1 1.3 1.1 2.4 0 1-.3 1.7-.9 2.3-.6.6-1.4.9-2.4.9-1 0-1.8-.3-2.4-.9-.6-.6-.9-1.3-.9-2.3 0-.9.3-1.7.9-2.3C356 197.5 356.9 197.2 357.9 197.2zM357.9 228.7c-2 0-3-.8-3-2.3v-17.7c0-.8.2-1.5.7-2 .5-.5 1.3-.7 2.4-.7.9 0 1.6.2 2.1.6.5.4.8 1 .8 1.8v17.8c0 .9-.3 1.5-.8 1.8S358.8 228.7 357.9 228.7zM379.2 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6-.5-.4-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C376.3 205.9 377.7 205.5 379.2 205.5zM413.7 227c0 1.9-.2 3.6-.7 4.9-.5 1.4-1.2 2.5-2.1 3.4s-2.1 1.5-3.4 2c-1.4.4-2.9.6-4.7.6-2.1 0-3.7-.2-4.9-.5-1.2-.4-2.1-.8-2.7-1.2-.7-.5-1-1.1-1-1.9 0-.7.2-1.4.6-2 .4-.6 1-.9 1.8-.9.4 0 .8.1 1.2.3.3.2.7.4 1.2.6s.9.4 1.5.6 1.4.3 2.4.3c1.6 0 2.8-.4 3.7-1.3.9-.9 1.4-2.2 1.4-4v-2.4c-.6.7-1.4 1.4-2.5 2s-2.4.9-4 .9c-1.5 0-2.8-.3-4-.8-1.2-.5-2.2-1.3-3-2.3-.8-1-1.4-2.2-1.9-3.5-.4-1.4-.7-2.9-.7-4.7 0-1.7.2-3.3.7-4.7.5-1.4 1.1-2.6 1.9-3.6.8-1 1.8-1.8 3-2.3s2.5-.8 4-.8c.9 0 1.7.1 2.3.3.7.2 1.3.5 1.8.8s1 .6 1.3 1c.4.4.7.7.9 1v-.9c0-.7.3-1.2.8-1.5.5-.3 1.2-.4 1.9-.4 1.1 0 1.8.3 2.3.8.5.5.7 1.1.7 1.9V227zM408.1 217.1c0-1.9-.4-3.5-1.2-4.7-.8-1.2-2.1-1.8-3.8-1.8-1.5 0-2.7.6-3.6 1.8-.8 1.2-1.3 2.7-1.3 4.7 0 1.9.4 3.5 1.3 4.6.8 1.1 2 1.7 3.5 1.7 1.7 0 3-.5 3.8-1.6C407.6 220.6 408.1 219.1 408.1 217.1zM448.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C448.6 213.9 448.8 215.3 448.8 216.8zM439.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S440.2 208.3 439.1 208.3zM451.8 209.2c-.1-.2-.2-.5-.3-.8-.1-.3-.2-.5-.2-.8 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .8.3 1 .9l7.2 18.3 7.6-18.3c.1-.3.3-.5.5-.7.2-.1.4-.2.6-.2.3 0 .7.1 1 .3s.5.4.5.8c0 .3-.1.7-.4 1.3l-8.2 18.9c-.1.3-.3.5-.6.7s-.6.2-1.1.2c-.5 0-.8-.1-1.1-.2-.2-.1-.4-.3-.5-.6L451.8 209.2zM493.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C493.6 213.9 493.8 215.3 493.8 216.8zM484.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S485.3 208.3 484.1 208.3zM501.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3c-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v4c.4-1 1-1.8 1.6-2.5.6-.7 1.3-1.2 1.9-1.7.7-.4 1.3-.7 2-.9.7-.2 1.3-.3 1.8-.3.6 0 1 .1 1.3.3s.4.6.4 1.1c0 .5-.1.9-.3 1.1s-.6.3-1 .3c-2.3 0-4.1.8-5.5 2.3-1.3 1.5-2 3.8-2 6.8V227.4zM519.4 236.6c-.3.6-.6.9-1.1.9-.3 0-.6-.1-.9-.3-.2-.2-.4-.5-.4-.8 0-.2.1-.6.3-1.1l3.2-7.2-8.2-19.5c-.1-.1-.1-.3-.2-.5-.1-.2-.1-.4-.1-.5 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .7.3.9.9l7.3 17.5 7.6-17.5c.2-.6.5-.9.9-.9.4 0 .7.1 1 .3s.5.4.5.8c0 .1 0 .3-.1.5s-.1.4-.2.5L519.4 236.6zM535 209c-.3 0-.6-.1-.7-.3-.1-.2-.2-.5-.2-.8 0-.3.1-.6.2-.8.1-.2.3-.3.7-.3h2.7v-4.9c0-.5 0-.8.1-1.1s.2-.4.4-.5c.2-.1.5-.2.7-.3s.5-.1.7-.1c.4 0 .6.2.6.7v6.1h4.9c.3 0 .6.1.7.3s.2.5.2.8c0 .3-.1.6-.2.8s-.3.3-.7.3h-4.9v13.9c0 1.5.3 2.6.8 3.1s1.4.8 2.6.8c.5 0 .9 0 1.2-.2.3-.1.6-.2.9-.4.1-.1.3-.1.4-.2.1-.1.3-.1.4-.1.2 0 .4.1.6.4s.3.6.3.9c0 .6-.4 1-1.2 1.3s-1.8.5-3 .5c-1.9 0-3.2-.5-4.1-1.4s-1.3-2.2-1.3-4V209H535zM553.7 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-28c0-.5.1-.8.4-.9.2-.2.5-.2.9-.2.4 0 .7.1.9.2.2.2.4.5.4.9v12c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.5-1.8s1.4-1.1 2.4-1.5c1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM575.3 200.1c0-.6.2-1.1.5-1.4.3-.3.8-.5 1.2-.5s.9.2 1.2.5c.3.3.5.8.5 1.4 0 .6-.2 1.1-.5 1.4s-.8.5-1.2.5-.9-.2-1.2-.5S575.3 200.7 575.3 200.1zM575.8 207.8c0-.5.1-.8.3-1 .2-.2.5-.3.9-.3s.7.1.9.3.3.5.3 1v19.6c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1V207.8zM587.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v3.9c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.6-1.8.7-.6 1.5-1.1 2.4-1.5 1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM627.8 228.7c0 3.1-.9 5.4-2.7 7-1.8 1.5-4.2 2.3-7.1 2.3-1.2 0-2.3-.1-3.3-.3-1-.2-1.9-.5-2.6-.8-.7-.3-1.2-.6-1.6-.9-.4-.3-.6-.7-.6-1.1 0-.3.1-.7.3-1s.5-.5.8-.5c.3 0 .5.1.8.3s.6.4 1 .6c.6.3 1.3.7 2.1 1 .8.3 1.8.5 3 .5 1 0 1.9-.1 2.8-.4.9-.3 1.6-.7 2.3-1.2.7-.6 1.2-1.3 1.6-2.2.4-.9.6-2 .6-3.4v-3.8c-.8 1.5-1.8 2.7-3.1 3.4-1.3.7-2.8 1-4.6 1-1.5 0-2.9-.3-4-.9-1.2-.6-2.2-1.4-3-2.4-.8-1-1.4-2.2-1.8-3.6-.4-1.4-.6-3-.6-4.6 0-1.7.2-3.2.6-4.6s1.1-2.6 1.9-3.6c.8-1 1.8-1.8 3-2.3s2.6-.8 4.1-.8c1.8 0 3.4.4 4.6 1.1 1.2.7 2.2 1.7 3 2.9v-2.4c0-.5.1-.8.3-1s.5-.3.9-.3.7.1.9.3.3.5.3 1V228.7zM610.8 217.7c0 1.3.2 2.6.5 3.7s.8 2.1 1.4 2.9c.6.8 1.4 1.4 2.3 1.8.9.4 2 .6 3.1.6 1.2 0 2.3-.2 3.2-.7.9-.5 1.7-1.1 2.3-1.9.6-.8 1.1-1.8 1.4-2.9.3-1.1.5-2.4.5-3.7 0-2.9-.7-5.1-2.1-6.7-1.4-1.6-3.2-2.4-5.6-2.4-1.2 0-2.2.2-3.1.7-.9.4-1.6 1.1-2.2 1.9s-1 1.8-1.3 2.9C611 215 610.8 216.3 610.8 217.7z" fill="#fff" /></symbol><symbol viewBox="0 0 630.7 237.9" id="logo-diatem"><style>#logo-diatem .st0000{fill:#676767}</style><path class="st0000" d="M252 170.8c0 2.1-.5 3.6-1.6 4.3-1 .8-2.6 1.2-4.7 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.6-2.2-1.6-4.3v-6.7c-2.2 3.8-5.5 7-9.9 9.6-4.4 2.6-9.8 3.9-16.2 3.9-5.5 0-10.4-1-14.6-2.9-4.2-1.9-7.8-4.6-10.8-8-3-3.4-5.2-7.5-6.7-12.3-1.5-4.8-2.3-10-2.3-15.7 0-5.7.8-10.9 2.3-15.7 1.5-4.7 3.8-8.8 6.7-12.2 3-3.4 6.6-6 10.8-7.9s9.1-2.8 14.6-2.8c3.2 0 6.2.4 9 1.2 2.8.8 5.2 1.7 7.4 2.9 2.1 1.2 4 2.5 5.6 4 1.6 1.5 2.8 3 3.6 4.4V79.4c0-2.2.6-3.7 1.8-4.6 1.2-.8 2.8-1.2 4.9-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.7 2.3 1.7 4.6V170.8zM192.9 139.1c0 8.4 2 15.1 5.9 20.1 4 5 9.6 7.5 17 7.5 3.8 0 7.1-.7 10-2.1 2.9-1.4 5.4-3.4 7.4-5.9 2-2.5 3.5-5.5 4.5-8.9 1-3.4 1.5-7.2 1.5-11.2 0-8.6-2.1-15.3-6.3-20.2-4.2-4.9-10-7.3-17.5-7.3-3.8 0-7 .7-9.9 2-2.8 1.4-5.2 3.3-7 5.7-1.9 2.5-3.3 5.4-4.2 8.8C193.3 131.2 192.9 135 192.9 139.1zM268.4 81.5c0-2.5.8-4.5 2.4-5.9 1.6-1.4 3.6-2.1 6-2.1 2.4 0 4.4.7 6 2.1 1.6 1.4 2.4 3.4 2.4 5.9 0 2.5-.8 4.5-2.4 5.9-1.6 1.4-3.6 2.1-6 2.1-2.4 0-4.4-.7-6-2.1C269.2 85.9 268.4 84 268.4 81.5zM270.3 107.3c0-2.2.6-3.7 1.7-4.6 1.1-.8 2.8-1.2 4.8-1.2 2.1 0 3.7.4 4.9 1.2 1.2.8 1.8 2.3 1.8 4.6v63.2c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107.3zM352.2 129.9V127c0-5.5-1.5-9.6-4.6-12.3-3.1-2.7-8.1-4.1-14.9-4.1-2.7 0-5.1.3-7 .9-2 .6-3.7 1.3-5.1 2-1.4.8-2.6 1.6-3.4 2.5-.9.9-1.6 1.6-2.3 2.3-1 1.2-1.9 1.9-2.7 2.3-.7.4-1.7.6-2.8.6-1.7 0-3.2-.5-4.6-1.4-1.4-.9-2.1-2.1-2.1-3.6 0-.8.1-1.4.2-1.9.2-.5.4-1 .7-1.6.1-.3.7-1.1 1.9-2.5 1.1-1.4 2.9-2.8 5.2-4.3 2.3-1.5 5.4-2.9 9.1-4.1 3.7-1.2 8.2-1.8 13.5-1.8 5.9 0 11 .7 15.1 2.1 4.1 1.4 7.4 3.3 9.9 5.6s4.3 5 5.5 8c1.1 3 1.7 6.2 1.7 9.5v46.2c0 3.2-2.2 4.8-6.7 4.8-3 0-4.9-.6-5.6-1.9-.7-1.3-1-3-1-5.2v-4.3c-1 1.4-2.3 2.8-3.8 4.2-1.5 1.5-3.3 2.8-5.4 4-2.1 1.2-4.7 2.2-7.7 3-3 .8-6.4 1.2-10.2 1.2-4.7 0-8.7-.5-12.1-1.6-3.4-1.1-6.2-2.5-8.4-4.4-2.2-1.9-3.9-4.1-5-6.7-1.1-2.6-1.6-5.3-1.6-8.2 0-3.8.7-7.2 2.2-10.4 1.5-3.2 4-5.9 7.5-8.2 3.5-2.3 8.3-4.1 14.2-5.4 5.9-1.3 13.3-2.1 22.3-2.2L352.2 129.9zM343.6 139.8c-6.7.1-12.1.5-16.3 1.3-4.2.8-7.5 1.8-9.9 3.1-2.4 1.3-4 2.9-4.9 4.7-.9 1.8-1.3 3.9-1.3 6.2 0 3.3 1.2 6.1 3.7 8.5 2.4 2.4 6.5 3.6 12.1 3.6 4.9 0 9.4-1 13.4-3.1 4-2.1 7.1-4.7 9.2-7.8 1.8-2.6 2.7-6.1 2.7-10.6v-6.1L343.6 139.8zM379.6 112.9c-2.1 0-3.5-.5-4.2-1.4-.7-.9-1.1-2.2-1.1-3.8 0-1.6.4-2.9 1.1-3.8.7-.9 2.1-1.4 4.2-1.4h7V87.6c0-1.8.2-3.2.5-4.1.4-.9 1.1-1.6 2.3-2.3 1.9-1.1 3.9-1.6 6.1-1.6 2.9 0 4.4 1.4 4.4 4.2v18.7h14.7c2.1 0 3.5.5 4.2 1.4.7.9 1.1 2.2 1.1 3.8 0 1.6-.4 2.9-1.1 3.8-.7.9-2.1 1.4-4.2 1.4H400v42.9c0 4.3.7 7.2 2.1 8.7 1.4 1.5 3.8 2.3 7.1 2.3 1.3 0 2.3-.1 3.2-.4.9-.3 1.7-.6 2.4-.9.7-.3 1.4-.6 2.1-.9.7-.3 1.5-.4 2.4-.4 1.5 0 2.7.6 3.8 1.7 1.1 1.2 1.6 2.6 1.6 4.2 0 2.3-1.6 4.1-4.8 5.4-3.2 1.3-7.3 2-12.2 2-7.2 0-12.5-1.6-16-4.9-3.4-3.2-5.2-7.9-5.2-14.1v-45.7H379.6zM500.5 137.1c0 3.5-2.1 5.2-6.4 5.2h-53.2c0 7.8 2.1 13.9 6.3 18.1 4.2 4.3 10.2 6.4 17.9 6.4 3 0 5.7-.4 7.9-1.1 2.2-.7 4.1-1.6 5.7-2.6 1.6-1 2.8-2.1 3.8-3.1 1-1.1 1.8-2 2.4-2.8.7-1 1.4-1.7 2.1-2.2.7-.5 1.7-.7 3-.7 1.5 0 2.9.4 4.3 1.3 1.4.9 2.1 2 2.1 3.5 0 1.3-.6 2.8-1.7 4.5-.9 1.4-2.2 2.8-3.7 4.4-1.5 1.6-3.4 3.1-5.8 4.6-2.3 1.5-5.2 2.7-8.5 3.6-3.3 1-7.2 1.5-11.7 1.5-5.8 0-11.1-.9-15.9-2.8-4.7-1.9-8.8-4.5-12.1-8-3.3-3.4-5.9-7.5-7.7-12.3-1.8-4.8-2.7-10-2.7-15.7 0-5.8.9-11.1 2.7-15.8 1.8-4.7 4.3-8.8 7.6-12.2 3.3-3.4 7.2-6.1 11.9-8 4.6-1.9 9.8-2.8 15.6-2.8 5.8 0 11 .9 15.5 2.8 4.5 1.9 8.2 4.5 11.3 7.8 3 3.3 5.3 7.3 6.9 11.8C499.7 127 500.5 131.9 500.5 137.1zM464.6 110.6c-3.7 0-6.8.6-9.5 1.7-2.7 1.1-5 2.6-6.9 4.5s-3.4 4.1-4.5 6.7c-1.1 2.6-1.8 5.2-2.1 8h45.5c-.3-2.7-1-5.3-2-7.9-1-2.6-2.4-4.8-4.2-6.7-1.8-1.9-4.1-3.4-6.8-4.6C471.4 111.2 468.2 110.6 464.6 110.6zM602.4 100c8.2 0 14.8 2.1 19.6 6.2 4.8 4.1 7.2 10.4 7.2 18.9v46.1c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.9-10.2 2.6-2.7 1.7-4.8 4-6.4 6.7-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v31.5c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.8-10.2 2.5-2.7 1.7-4.8 3.9-6.4 6.6-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v30.9c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107c0-2.1.5-3.6 1.6-4.3 1-.8 2.6-1.2 4.7-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.6 2.2 1.6 4.3v6.8c.1-.4.5-1.3 1.3-2.6.8-1.5 2.2-3.1 4.1-4.8 1.9-1.6 4.4-3.1 7.6-4.4 3.2-1.3 7.2-2 12-2 6.4 0 11.5 1.2 15.6 3.6 4 2.4 6.9 5.6 8.7 9.6 2.2-4 5.6-7.2 10.2-9.6C590.7 101.2 596.1 100 602.4 100z" /><path d="M138.9,105L72.6,36.6c-4.4-4.5-11.9-5-16.8-1.1C29.7,56.2,16.9,73.9,2.4,106.4c-6.7,15.1,1.4,28.5,17.9,29.7 l103,20.4c6,0.4,12.3-3.9,13.9-9.7l6.5-23.4C145.2,117.6,143.1,109.3,138.9,105z" fill="#61c5e8" /><path d="M162.2,72.5l-14.7-59.7C145.7,5.6,138.3-0.4,131,0C116.9,0.9,103,4.1,88,10.4c-6.8,2.8-8.2,10.1-3.5,15.7 l59.2,70.4c4.7,5.6,11.5,5.4,15.1-0.5C162.4,90.1,163.9,79.6,162.2,72.5z" fill="#ed6f30" /><path d="M192.1,70.8l8.7-26.3c3-9.1,0.2-22.2-7.1-28.5c-5-4.3-10.5-8.6-16.1-12.3c-8-5.3-14.7-0.6-14.1,9l2.9,45 c0.6,9.6,5.4,20.1,10.7,23.4C182.4,84.5,189.1,79.9,192.1,70.8z" fill="#80bc49" /><path class="st0000" d="M232.5 217.2c0 1.8-.3 3.4-.8 4.9-.5 1.5-1.3 2.7-2.3 3.7-1 1-2.2 1.8-3.6 2.4-1.4.6-3 .9-4.7.9-1.8 0-3.4-.3-4.8-.8-1.4-.6-2.6-1.4-3.6-2.4-1-1-1.7-2.3-2.3-3.7-.5-1.5-.8-3.1-.8-4.9 0-1.8.3-3.4.8-4.8s1.3-2.7 2.4-3.7c1-1 2.2-1.8 3.6-2.4 1.4-.6 3-.8 4.7-.8 1.7 0 3.3.3 4.7.8 1.4.6 2.6 1.3 3.6 2.3 1 1 1.8 2.2 2.3 3.7C232.2 213.8 232.5 215.4 232.5 217.2zM226.5 217.4c0-2.1-.5-3.8-1.4-5-.9-1.2-2.3-1.8-4-1.8-1.7 0-3 .6-3.9 1.8-1 1.2-1.4 2.9-1.4 5 0 2.1.5 3.8 1.4 5 1 1.2 2.3 1.8 3.9 1.8 1.7 0 3.1-.6 4-1.8C226 221.2 226.5 219.5 226.5 217.4zM249.8 205.5c1.5 0 2.7.2 3.7.7s1.8 1.2 2.6 2c.7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C246.9 205.9 248.2 205.5 249.8 205.5zM276 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C273.1 205.9 274.5 205.5 276 205.5zM299.9 205.5c3.1 0 5.6 1 7.5 2.9 1.8 1.9 2.8 4.7 2.8 8.3 0 .8-.3 1.4-.8 1.7-.5.3-1.2.5-2.1.5h-12.5c.3 3.5 2.2 5.3 5.7 5.3.9 0 1.7-.2 2.3-.5.6-.3 1.2-.6 1.6-.8.4-.2.8-.5 1.2-.7s.8-.3 1.3-.3c.6 0 1.1.3 1.6.9.5.6.7 1.2.7 1.9 0 .5-.2 1-.5 1.4s-.8.8-1.5 1.2c-.9.6-2 1-3.3 1.3-1.3.3-2.5.5-3.8.5-1.8 0-3.4-.2-4.8-.7-1.4-.5-2.7-1.2-3.7-2.1s-1.8-2.1-2.3-3.6c-.5-1.4-.8-3.2-.8-5.1 0-1.5.2-3 .6-4.4s1.1-2.7 2-3.8c.9-1.1 2.1-2 3.5-2.7S298 205.5 299.9 205.5zM304.2 214.5c0-.5-.1-1-.3-1.6-.2-.5-.4-1-.8-1.4-.4-.4-.8-.8-1.4-1-.5-.3-1.2-.4-2-.4-1.2 0-2.3.4-3.2 1.1s-1.4 1.9-1.6 3.3H304.2zM324.8 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C321.6 205.8 323.1 205.5 324.8 205.5zM196.5 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C193.3 205.8 194.9 205.5 196.5 205.5zM344.9 229.1c-1.9 0-3.4-.5-4.5-1.5s-1.7-2.6-1.7-4.7v-12.2h-1.8c-.5 0-.8-.3-1.1-.8-.2-.5-.3-1-.3-1.5 0-.5.1-1 .3-1.4s.6-.7 1.1-.7h1.9v-4.1c0-.5.1-1 .4-1.3s.6-.6.9-.9.8-.4 1.2-.5.9-.2 1.3-.2c.7 0 1.3.2 1.6.5s.5.8.5 1.4v5h3.5c.6 0 1 .2 1.2.6s.3.9.3 1.5c0 1.5-.5 2.3-1.6 2.3h-3.5v11.5c0 .7.1 1.1.4 1.4.2.3.6.4 1.1.4.3 0 .6 0 .9-.2s.5-.2.7-.3l.7-.3c.2-.1.5-.2.8-.2.7 0 1.3.3 1.6.9.3.6.5 1.2.5 1.8 0 .5-.1.9-.2 1.2-.2.4-.4.7-.8.9-.6.4-1.3.7-2.2.9S346.1 229.1 344.9 229.1zM357.9 197.2c.8 0 1.6.3 2.3.8.7.5 1.1 1.3 1.1 2.4 0 1-.3 1.7-.9 2.3-.6.6-1.4.9-2.4.9-1 0-1.8-.3-2.4-.9-.6-.6-.9-1.3-.9-2.3 0-.9.3-1.7.9-2.3C356 197.5 356.9 197.2 357.9 197.2zM357.9 228.7c-2 0-3-.8-3-2.3v-17.7c0-.8.2-1.5.7-2 .5-.5 1.3-.7 2.4-.7.9 0 1.6.2 2.1.6.5.4.8 1 .8 1.8v17.8c0 .9-.3 1.5-.8 1.8S358.8 228.7 357.9 228.7zM379.2 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6-.5-.4-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C376.3 205.9 377.7 205.5 379.2 205.5zM413.7 227c0 1.9-.2 3.6-.7 4.9-.5 1.4-1.2 2.5-2.1 3.4s-2.1 1.5-3.4 2c-1.4.4-2.9.6-4.7.6-2.1 0-3.7-.2-4.9-.5-1.2-.4-2.1-.8-2.7-1.2-.7-.5-1-1.1-1-1.9 0-.7.2-1.4.6-2 .4-.6 1-.9 1.8-.9.4 0 .8.1 1.2.3.3.2.7.4 1.2.6s.9.4 1.5.6 1.4.3 2.4.3c1.6 0 2.8-.4 3.7-1.3.9-.9 1.4-2.2 1.4-4v-2.4c-.6.7-1.4 1.4-2.5 2s-2.4.9-4 .9c-1.5 0-2.8-.3-4-.8-1.2-.5-2.2-1.3-3-2.3-.8-1-1.4-2.2-1.9-3.5-.4-1.4-.7-2.9-.7-4.7 0-1.7.2-3.3.7-4.7.5-1.4 1.1-2.6 1.9-3.6.8-1 1.8-1.8 3-2.3s2.5-.8 4-.8c.9 0 1.7.1 2.3.3.7.2 1.3.5 1.8.8s1 .6 1.3 1c.4.4.7.7.9 1v-.9c0-.7.3-1.2.8-1.5.5-.3 1.2-.4 1.9-.4 1.1 0 1.8.3 2.3.8.5.5.7 1.1.7 1.9V227zM408.1 217.1c0-1.9-.4-3.5-1.2-4.7-.8-1.2-2.1-1.8-3.8-1.8-1.5 0-2.7.6-3.6 1.8-.8 1.2-1.3 2.7-1.3 4.7 0 1.9.4 3.5 1.3 4.6.8 1.1 2 1.7 3.5 1.7 1.7 0 3-.5 3.8-1.6C407.6 220.6 408.1 219.1 408.1 217.1zM448.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C448.6 213.9 448.8 215.3 448.8 216.8zM439.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S440.2 208.3 439.1 208.3zM451.8 209.2c-.1-.2-.2-.5-.3-.8-.1-.3-.2-.5-.2-.8 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .8.3 1 .9l7.2 18.3 7.6-18.3c.1-.3.3-.5.5-.7.2-.1.4-.2.6-.2.3 0 .7.1 1 .3s.5.4.5.8c0 .3-.1.7-.4 1.3l-8.2 18.9c-.1.3-.3.5-.6.7s-.6.2-1.1.2c-.5 0-.8-.1-1.1-.2-.2-.1-.4-.3-.5-.6L451.8 209.2zM493.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C493.6 213.9 493.8 215.3 493.8 216.8zM484.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S485.3 208.3 484.1 208.3zM501.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3c-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v4c.4-1 1-1.8 1.6-2.5.6-.7 1.3-1.2 1.9-1.7.7-.4 1.3-.7 2-.9.7-.2 1.3-.3 1.8-.3.6 0 1 .1 1.3.3s.4.6.4 1.1c0 .5-.1.9-.3 1.1s-.6.3-1 .3c-2.3 0-4.1.8-5.5 2.3-1.3 1.5-2 3.8-2 6.8V227.4zM519.4 236.6c-.3.6-.6.9-1.1.9-.3 0-.6-.1-.9-.3-.2-.2-.4-.5-.4-.8 0-.2.1-.6.3-1.1l3.2-7.2-8.2-19.5c-.1-.1-.1-.3-.2-.5-.1-.2-.1-.4-.1-.5 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .7.3.9.9l7.3 17.5 7.6-17.5c.2-.6.5-.9.9-.9.4 0 .7.1 1 .3s.5.4.5.8c0 .1 0 .3-.1.5s-.1.4-.2.5L519.4 236.6zM535 209c-.3 0-.6-.1-.7-.3-.1-.2-.2-.5-.2-.8 0-.3.1-.6.2-.8.1-.2.3-.3.7-.3h2.7v-4.9c0-.5 0-.8.1-1.1s.2-.4.4-.5c.2-.1.5-.2.7-.3s.5-.1.7-.1c.4 0 .6.2.6.7v6.1h4.9c.3 0 .6.1.7.3s.2.5.2.8c0 .3-.1.6-.2.8s-.3.3-.7.3h-4.9v13.9c0 1.5.3 2.6.8 3.1s1.4.8 2.6.8c.5 0 .9 0 1.2-.2.3-.1.6-.2.9-.4.1-.1.3-.1.4-.2.1-.1.3-.1.4-.1.2 0 .4.1.6.4s.3.6.3.9c0 .6-.4 1-1.2 1.3s-1.8.5-3 .5c-1.9 0-3.2-.5-4.1-1.4s-1.3-2.2-1.3-4V209H535zM553.7 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-28c0-.5.1-.8.4-.9.2-.2.5-.2.9-.2.4 0 .7.1.9.2.2.2.4.5.4.9v12c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.5-1.8s1.4-1.1 2.4-1.5c1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM575.3 200.1c0-.6.2-1.1.5-1.4.3-.3.8-.5 1.2-.5s.9.2 1.2.5c.3.3.5.8.5 1.4 0 .6-.2 1.1-.5 1.4s-.8.5-1.2.5-.9-.2-1.2-.5S575.3 200.7 575.3 200.1zM575.8 207.8c0-.5.1-.8.3-1 .2-.2.5-.3.9-.3s.7.1.9.3.3.5.3 1v19.6c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1V207.8zM587.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v3.9c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.6-1.8.7-.6 1.5-1.1 2.4-1.5 1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM627.8 228.7c0 3.1-.9 5.4-2.7 7-1.8 1.5-4.2 2.3-7.1 2.3-1.2 0-2.3-.1-3.3-.3-1-.2-1.9-.5-2.6-.8-.7-.3-1.2-.6-1.6-.9-.4-.3-.6-.7-.6-1.1 0-.3.1-.7.3-1s.5-.5.8-.5c.3 0 .5.1.8.3s.6.4 1 .6c.6.3 1.3.7 2.1 1 .8.3 1.8.5 3 .5 1 0 1.9-.1 2.8-.4.9-.3 1.6-.7 2.3-1.2.7-.6 1.2-1.3 1.6-2.2.4-.9.6-2 .6-3.4v-3.8c-.8 1.5-1.8 2.7-3.1 3.4-1.3.7-2.8 1-4.6 1-1.5 0-2.9-.3-4-.9-1.2-.6-2.2-1.4-3-2.4-.8-1-1.4-2.2-1.8-3.6-.4-1.4-.6-3-.6-4.6 0-1.7.2-3.2.6-4.6s1.1-2.6 1.9-3.6c.8-1 1.8-1.8 3-2.3s2.6-.8 4.1-.8c1.8 0 3.4.4 4.6 1.1 1.2.7 2.2 1.7 3 2.9v-2.4c0-.5.1-.8.3-1s.5-.3.9-.3.7.1.9.3.3.5.3 1V228.7zM610.8 217.7c0 1.3.2 2.6.5 3.7s.8 2.1 1.4 2.9c.6.8 1.4 1.4 2.3 1.8.9.4 2 .6 3.1.6 1.2 0 2.3-.2 3.2-.7.9-.5 1.7-1.1 2.3-1.9.6-.8 1.1-1.8 1.4-2.9.3-1.1.5-2.4.5-3.7 0-2.9-.7-5.1-2.1-6.7-1.4-1.6-3.2-2.4-5.6-2.4-1.2 0-2.2.2-3.1.7-.9.4-1.6 1.1-2.2 1.9s-1 1.8-1.3 2.9C611 215 610.8 216.3 610.8 217.7z" /></symbol><symbol viewBox="0 0 629.155 177.578" id="logo-diatem--no-baseline--no-color"><path d="M251.9551 170.72429c0 2.1-.5 3.6-1.6 4.3-1 .8-2.6 1.2-4.7 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.6-2.2-1.6-4.3v-6.7c-2.2 3.8-5.5 7-9.9 9.6-4.4 2.6-9.8 3.9-16.2 3.9-5.5 0-10.4-1-14.6-2.9-4.2-1.9-7.8-4.6-10.8-8-3-3.4-5.2-7.5-6.7-12.3-1.5-4.8-2.3-10-2.3-15.7 0-5.7.8-10.9 2.3-15.7 1.5-4.7 3.8-8.8 6.7-12.2 3-3.4 6.6-6 10.8-7.9 4.2-1.9 9.1-2.8 14.6-2.8 3.2 0 6.2.4 9 1.2 2.8.8 5.2 1.7 7.4 2.9 2.1 1.2 4 2.5 5.6 4 1.6 1.5 2.8 3 3.6 4.4V79.324287c0-2.2.6-3.7 1.8-4.6 1.2-.8 2.8-1.2 4.9-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.7 2.3 1.7 4.6zm-59.1-31.7c0 8.4 2 15.1 5.9 20.1 4 5 9.6 7.5 17 7.5 3.8 0 7.1-.7 10-2.1 2.9-1.4 5.4-3.4 7.4-5.9 2-2.5 3.5-5.5 4.5-8.9 1-3.4 1.5-7.2 1.5-11.2 0-8.6-2.1-15.3-6.3-20.2-4.2-4.9-10-7.3-17.5-7.3-3.8 0-7 .7-9.9 2-2.8 1.4-5.2 3.3-7 5.7-1.9 2.5-3.3 5.4-4.2 8.8-1 3.6-1.4 7.4-1.4 11.5zM268.3551 81.424287c0-2.5.8-4.5 2.4-5.9 1.6-1.4 3.6-2.1 6-2.1 2.4 0 4.4.7 6 2.1 1.6 1.4 2.4 3.4 2.4 5.9 0 2.5-.8 4.5-2.4 5.9-1.6 1.4-3.6 2.1-6 2.1-2.4 0-4.4-.7-6-2.1-1.6-1.5-2.4-3.4-2.4-5.9zm1.9 25.800003c0-2.2.6-3.7 1.7-4.6 1.1-.8 2.8-1.2 4.8-1.2 2.1 0 3.7.4 4.9 1.2 1.2.8 1.8 2.3 1.8 4.6v63.2c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6zM352.1551 129.82429v-2.9c0-5.5-1.5-9.6-4.6-12.3-3.1-2.7-8.1-4.1-14.9-4.1-2.7 0-5.1.3-7 .9-2 .6-3.7 1.3-5.1 2-1.4.8-2.6 1.6-3.4 2.5-.9.9-1.6 1.6-2.3 2.3-1 1.2-1.9 1.9-2.7 2.3-.7.4-1.7.6-2.8.6-1.7 0-3.2-.5-4.6-1.4-1.4-.9-2.1-2.1-2.1-3.6 0-.8.1-1.4.2-1.9.2-.5.4-1 .7-1.6.1-.3.7-1.1 1.9-2.5 1.1-1.4 2.9-2.8 5.2-4.3 2.3-1.5 5.4-2.9 9.1-4.1 3.7-1.2 8.2-1.800003 13.5-1.800003 5.9 0 11 .700003 15.1 2.100003 4.1 1.4 7.4 3.3 9.9 5.6 2.5 2.3 4.3 5 5.5 8 1.1 3 1.7 6.2 1.7 9.5v46.2c0 3.2-2.2 4.8-6.7 4.8-3 0-4.9-.6-5.6-1.9-.7-1.3-1-3-1-5.2v-4.3c-1 1.4-2.3 2.8-3.8 4.2-1.5 1.5-3.3 2.8-5.4 4-2.1 1.2-4.7 2.2-7.7 3-3 .8-6.4 1.2-10.2 1.2-4.7 0-8.7-.5-12.1-1.6-3.4-1.1-6.2-2.5-8.4-4.4-2.2-1.9-3.9-4.1-5-6.7-1.1-2.6-1.6-5.3-1.6-8.2 0-3.8.7-7.2 2.2-10.4 1.5-3.2 4-5.9 7.5-8.2 3.5-2.3 8.3-4.1 14.2-5.4 5.9-1.3 13.3-2.1 22.3-2.2zm-8.6 9.9c-6.7.1-12.1.5-16.3 1.3-4.2.8-7.5 1.8-9.9 3.1-2.4 1.3-4 2.9-4.9 4.7-.9 1.8-1.3 3.9-1.3 6.2 0 3.3 1.2 6.1 3.7 8.5 2.4 2.4 6.5 3.6 12.1 3.6 4.9 0 9.4-1 13.4-3.1 4-2.1 7.1-4.7 9.2-7.8 1.8-2.6 2.7-6.1 2.7-10.6v-6.1zM379.5551 112.82429c-2.1 0-3.5-.5-4.2-1.4-.7-.9-1.1-2.2-1.1-3.8 0-1.6.4-2.9 1.1-3.8.7-.9 2.1-1.4 4.2-1.4h7V87.524287c0-1.8.2-3.2.5-4.1.4-.9 1.1-1.6 2.3-2.3 1.9-1.1 3.9-1.6 6.1-1.6 2.9 0 4.4 1.4 4.4 4.2v18.700003h14.7c2.1 0 3.5.5 4.2 1.4.7.9 1.1 2.2 1.1 3.8 0 1.6-.4 2.9-1.1 3.8-.7.9-2.1 1.4-4.2 1.4h-14.6v42.9c0 4.3.7 7.2 2.1 8.7 1.4 1.5 3.8 2.3 7.1 2.3 1.3 0 2.3-.1 3.2-.4.9-.3 1.7-.6 2.4-.9.7-.3 1.4-.6 2.1-.9.7-.3 1.5-.4 2.4-.4 1.5 0 2.7.6 3.8 1.7 1.1 1.2 1.6 2.6 1.6 4.2 0 2.3-1.6 4.1-4.8 5.4-3.2 1.3-7.3 2-12.2 2-7.2 0-12.5-1.6-16-4.9-3.4-3.2-5.2-7.9-5.2-14.1v-45.7h-6.9zM500.4551 137.02429c0 3.5-2.1 5.2-6.4 5.2h-53.2c0 7.8 2.1 13.9 6.3 18.1 4.2 4.3 10.2 6.4 17.9 6.4 3 0 5.7-.4 7.9-1.1 2.2-.7 4.1-1.6 5.7-2.6 1.6-1 2.8-2.1 3.8-3.1 1-1.1 1.8-2 2.4-2.8.7-1 1.4-1.7 2.1-2.2.7-.5 1.7-.7 3-.7 1.5 0 2.9.4 4.3 1.3 1.4.9 2.1 2 2.1 3.5 0 1.3-.6 2.8-1.7 4.5-.9 1.4-2.2 2.8-3.7 4.4-1.5 1.6-3.4 3.1-5.8 4.6-2.3 1.5-5.2 2.7-8.5 3.6-3.3 1-7.2 1.5-11.7 1.5-5.8 0-11.1-.9-15.9-2.8-4.7-1.9-8.8-4.5-12.1-8-3.3-3.4-5.9-7.5-7.7-12.3-1.8-4.8-2.7-10-2.7-15.7 0-5.8.9-11.1 2.7-15.8 1.8-4.7 4.3-8.8 7.6-12.2 3.3-3.4 7.2-6.1 11.9-8 4.6-1.9 9.8-2.8 15.6-2.8 5.8 0 11 .9 15.5 2.8 4.5 1.9 8.2 4.5 11.3 7.8 3 3.3 5.3 7.3 6.9 11.8 1.6 4.5 2.4 9.4 2.4 14.6zm-35.9-26.5c-3.7 0-6.8.6-9.5 1.7-2.7 1.1-5 2.6-6.9 4.5-1.9 1.9-3.4 4.1-4.5 6.7-1.1 2.6-1.8 5.2-2.1 8h45.5c-.3-2.7-1-5.3-2-7.9-1-2.6-2.4-4.8-4.2-6.7-1.8-1.9-4.1-3.4-6.8-4.6-2.7-1.1-5.9-1.7-9.5-1.7zM602.3551 99.924287c8.2 0 14.8 2.100003 19.6 6.200003 4.8 4.1 7.2 10.4 7.2 18.9v46.1c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1v-42.2c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.9-10.2 2.6-2.7 1.7-4.8 4-6.4 6.7-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v31.5c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1v-42.2c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.8-10.2 2.5-2.7 1.7-4.8 3.9-6.4 6.6-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v30.9c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6v-63.4c0-2.1.5-3.6 1.6-4.3 1-.8 2.6-1.2 4.7-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.6 2.2 1.6 4.3v6.8c.1-.4.5-1.3 1.3-2.6.8-1.5 2.2-3.1 4.1-4.8 1.9-1.6 4.4-3.1 7.6-4.4 3.2-1.3 7.2-2.000003 12-2.000003 6.4 0 11.5 1.200003 15.6 3.600003 4 2.4 6.9 5.6 8.7 9.6 2.2-4 5.6-7.2 10.2-9.6 4.3-2.4 9.7-3.600003 16-3.600003z" class="st0000" /><path class="st11111" d="M 138.8551,104.92429 72.555104,36.524287 c -4.4,-4.5 -11.9,-5 -16.8,-1.1 -26.1,20.7 -38.9,38.4 -53.3999997,70.900003 -6.7,15.1 1.4,28.5 17.8999997,29.7 l 102.999996,20.4 c 6,0.4 12.3,-3.9 13.9,-9.7 l 6.5,-23.4 c 1.5,-5.8 -0.6,-14.1 -4.8,-18.4 z" /><path class="st222222" d="m 162.1551,72.424287 -14.7,-59.7 c -1.8,-7.2000002 -9.2,-13.20000021 -16.5,-12.80000021 -14.1,0.9 -28,4.10000001 -42.999996,10.40000021 -6.8,2.8 -8.2,10.1 -3.5,15.7 l 59.199996,70.4 c 4.7,5.600003 11.5,5.400003 15.1,-0.5 3.6,-5.9 5.1,-16.4 3.4,-23.5 z" /><path class="st333333" d="m 192.0551,70.724287 8.7,-26.3 c 3,-9.1 0.2,-22.2 -7.1,-28.5 -5,-4.3 -10.5,-8.6000002 -16.1,-12.3000002 -8,-5.3 -14.7,-0.6 -14.1,9.0000002 l 2.9,45 c 0.6,9.6 5.4,20.1 10.7,23.4 5.3,3.4 12,-1.2 15,-10.3 z" /></symbol><symbol viewBox="0 0 629.155 177.578" id="logo-diatem--no-baseline--white-only"><path d="M251.9551 170.72429c0 2.1-.5 3.6-1.6 4.3-1 .8-2.6 1.2-4.7 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.6-2.2-1.6-4.3v-6.7c-2.2 3.8-5.5 7-9.9 9.6-4.4 2.6-9.8 3.9-16.2 3.9-5.5 0-10.4-1-14.6-2.9-4.2-1.9-7.8-4.6-10.8-8-3-3.4-5.2-7.5-6.7-12.3-1.5-4.8-2.3-10-2.3-15.7 0-5.7.8-10.9 2.3-15.7 1.5-4.7 3.8-8.8 6.7-12.2 3-3.4 6.6-6 10.8-7.9 4.2-1.9 9.1-2.8 14.6-2.8 3.2 0 6.2.4 9 1.2 2.8.8 5.2 1.7 7.4 2.9 2.1 1.2 4 2.5 5.6 4 1.6 1.5 2.8 3 3.6 4.4V79.324287c0-2.2.6-3.7 1.8-4.6 1.2-.8 2.8-1.2 4.9-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.7 2.3 1.7 4.6zm-59.1-31.7c0 8.4 2 15.1 5.9 20.1 4 5 9.6 7.5 17 7.5 3.8 0 7.1-.7 10-2.1 2.9-1.4 5.4-3.4 7.4-5.9 2-2.5 3.5-5.5 4.5-8.9 1-3.4 1.5-7.2 1.5-11.2 0-8.6-2.1-15.3-6.3-20.2-4.2-4.9-10-7.3-17.5-7.3-3.8 0-7 .7-9.9 2-2.8 1.4-5.2 3.3-7 5.7-1.9 2.5-3.3 5.4-4.2 8.8-1 3.6-1.4 7.4-1.4 11.5zM268.3551 81.424287c0-2.5.8-4.5 2.4-5.9 1.6-1.4 3.6-2.1 6-2.1 2.4 0 4.4.7 6 2.1 1.6 1.4 2.4 3.4 2.4 5.9 0 2.5-.8 4.5-2.4 5.9-1.6 1.4-3.6 2.1-6 2.1-2.4 0-4.4-.7-6-2.1-1.6-1.5-2.4-3.4-2.4-5.9zm1.9 25.800003c0-2.2.6-3.7 1.7-4.6 1.1-.8 2.8-1.2 4.8-1.2 2.1 0 3.7.4 4.9 1.2 1.2.8 1.8 2.3 1.8 4.6v63.2c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6zM352.1551 129.82429v-2.9c0-5.5-1.5-9.6-4.6-12.3-3.1-2.7-8.1-4.1-14.9-4.1-2.7 0-5.1.3-7 .9-2 .6-3.7 1.3-5.1 2-1.4.8-2.6 1.6-3.4 2.5-.9.9-1.6 1.6-2.3 2.3-1 1.2-1.9 1.9-2.7 2.3-.7.4-1.7.6-2.8.6-1.7 0-3.2-.5-4.6-1.4-1.4-.9-2.1-2.1-2.1-3.6 0-.8.1-1.4.2-1.9.2-.5.4-1 .7-1.6.1-.3.7-1.1 1.9-2.5 1.1-1.4 2.9-2.8 5.2-4.3 2.3-1.5 5.4-2.9 9.1-4.1 3.7-1.2 8.2-1.800003 13.5-1.800003 5.9 0 11 .700003 15.1 2.100003 4.1 1.4 7.4 3.3 9.9 5.6 2.5 2.3 4.3 5 5.5 8 1.1 3 1.7 6.2 1.7 9.5v46.2c0 3.2-2.2 4.8-6.7 4.8-3 0-4.9-.6-5.6-1.9-.7-1.3-1-3-1-5.2v-4.3c-1 1.4-2.3 2.8-3.8 4.2-1.5 1.5-3.3 2.8-5.4 4-2.1 1.2-4.7 2.2-7.7 3-3 .8-6.4 1.2-10.2 1.2-4.7 0-8.7-.5-12.1-1.6-3.4-1.1-6.2-2.5-8.4-4.4-2.2-1.9-3.9-4.1-5-6.7-1.1-2.6-1.6-5.3-1.6-8.2 0-3.8.7-7.2 2.2-10.4 1.5-3.2 4-5.9 7.5-8.2 3.5-2.3 8.3-4.1 14.2-5.4 5.9-1.3 13.3-2.1 22.3-2.2zm-8.6 9.9c-6.7.1-12.1.5-16.3 1.3-4.2.8-7.5 1.8-9.9 3.1-2.4 1.3-4 2.9-4.9 4.7-.9 1.8-1.3 3.9-1.3 6.2 0 3.3 1.2 6.1 3.7 8.5 2.4 2.4 6.5 3.6 12.1 3.6 4.9 0 9.4-1 13.4-3.1 4-2.1 7.1-4.7 9.2-7.8 1.8-2.6 2.7-6.1 2.7-10.6v-6.1zM379.5551 112.82429c-2.1 0-3.5-.5-4.2-1.4-.7-.9-1.1-2.2-1.1-3.8 0-1.6.4-2.9 1.1-3.8.7-.9 2.1-1.4 4.2-1.4h7V87.524287c0-1.8.2-3.2.5-4.1.4-.9 1.1-1.6 2.3-2.3 1.9-1.1 3.9-1.6 6.1-1.6 2.9 0 4.4 1.4 4.4 4.2v18.700003h14.7c2.1 0 3.5.5 4.2 1.4.7.9 1.1 2.2 1.1 3.8 0 1.6-.4 2.9-1.1 3.8-.7.9-2.1 1.4-4.2 1.4h-14.6v42.9c0 4.3.7 7.2 2.1 8.7 1.4 1.5 3.8 2.3 7.1 2.3 1.3 0 2.3-.1 3.2-.4.9-.3 1.7-.6 2.4-.9.7-.3 1.4-.6 2.1-.9.7-.3 1.5-.4 2.4-.4 1.5 0 2.7.6 3.8 1.7 1.1 1.2 1.6 2.6 1.6 4.2 0 2.3-1.6 4.1-4.8 5.4-3.2 1.3-7.3 2-12.2 2-7.2 0-12.5-1.6-16-4.9-3.4-3.2-5.2-7.9-5.2-14.1v-45.7h-6.9zM500.4551 137.02429c0 3.5-2.1 5.2-6.4 5.2h-53.2c0 7.8 2.1 13.9 6.3 18.1 4.2 4.3 10.2 6.4 17.9 6.4 3 0 5.7-.4 7.9-1.1 2.2-.7 4.1-1.6 5.7-2.6 1.6-1 2.8-2.1 3.8-3.1 1-1.1 1.8-2 2.4-2.8.7-1 1.4-1.7 2.1-2.2.7-.5 1.7-.7 3-.7 1.5 0 2.9.4 4.3 1.3 1.4.9 2.1 2 2.1 3.5 0 1.3-.6 2.8-1.7 4.5-.9 1.4-2.2 2.8-3.7 4.4-1.5 1.6-3.4 3.1-5.8 4.6-2.3 1.5-5.2 2.7-8.5 3.6-3.3 1-7.2 1.5-11.7 1.5-5.8 0-11.1-.9-15.9-2.8-4.7-1.9-8.8-4.5-12.1-8-3.3-3.4-5.9-7.5-7.7-12.3-1.8-4.8-2.7-10-2.7-15.7 0-5.8.9-11.1 2.7-15.8 1.8-4.7 4.3-8.8 7.6-12.2 3.3-3.4 7.2-6.1 11.9-8 4.6-1.9 9.8-2.8 15.6-2.8 5.8 0 11 .9 15.5 2.8 4.5 1.9 8.2 4.5 11.3 7.8 3 3.3 5.3 7.3 6.9 11.8 1.6 4.5 2.4 9.4 2.4 14.6zm-35.9-26.5c-3.7 0-6.8.6-9.5 1.7-2.7 1.1-5 2.6-6.9 4.5-1.9 1.9-3.4 4.1-4.5 6.7-1.1 2.6-1.8 5.2-2.1 8h45.5c-.3-2.7-1-5.3-2-7.9-1-2.6-2.4-4.8-4.2-6.7-1.8-1.9-4.1-3.4-6.8-4.6-2.7-1.1-5.9-1.7-9.5-1.7zM602.3551 99.924287c8.2 0 14.8 2.100003 19.6 6.200003 4.8 4.1 7.2 10.4 7.2 18.9v46.1c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1v-42.2c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.9-10.2 2.6-2.7 1.7-4.8 4-6.4 6.7-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v31.5c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1v-42.2c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.8-10.2 2.5-2.7 1.7-4.8 3.9-6.4 6.6-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v30.9c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6v-63.4c0-2.1.5-3.6 1.6-4.3 1-.8 2.6-1.2 4.7-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.6 2.2 1.6 4.3v6.8c.1-.4.5-1.3 1.3-2.6.8-1.5 2.2-3.1 4.1-4.8 1.9-1.6 4.4-3.1 7.6-4.4 3.2-1.3 7.2-2.000003 12-2.000003 6.4 0 11.5 1.200003 15.6 3.600003 4 2.4 6.9 5.6 8.7 9.6 2.2-4 5.6-7.2 10.2-9.6 4.3-2.4 9.7-3.600003 16-3.600003z" class="st0000" fill="#fff" /><path class="st11111" d="M 138.8551,104.92429 72.555104,36.524287 c -4.4,-4.5 -11.9,-5 -16.8,-1.1 -26.1,20.7 -38.9,38.4 -53.3999997,70.900003 -6.7,15.1 1.4,28.5 17.8999997,29.7 l 102.999996,20.4 c 6,0.4 12.3,-3.9 13.9,-9.7 l 6.5,-23.4 c 1.5,-5.8 -0.6,-14.1 -4.8,-18.4 z" fill="#fff" /><path class="st222222" d="m 162.1551,72.424287 -14.7,-59.7 c -1.8,-7.2000002 -9.2,-13.20000021 -16.5,-12.80000021 -14.1,0.9 -28,4.10000001 -42.999996,10.40000021 -6.8,2.8 -8.2,10.1 -3.5,15.7 l 59.199996,70.4 c 4.7,5.600003 11.5,5.400003 15.1,-0.5 3.6,-5.9 5.1,-16.4 3.4,-23.5 z" fill="#fff" /><path class="st333333" d="m 192.0551,70.724287 8.7,-26.3 c 3,-9.1 0.2,-22.2 -7.1,-28.5 -5,-4.3 -10.5,-8.6000002 -16.1,-12.3000002 -8,-5.3 -14.7,-0.6 -14.1,9.0000002 l 2.9,45 c 0.6,9.6 5.4,20.1 10.7,23.4 5.3,3.4 12,-1.2 15,-10.3 z" fill="#fff" /></symbol><symbol viewBox="0 0 630.7 237.9" id="logo-diatem--white"><g fill="#fff"><path class="st0000" d="M252 170.8c0 2.1-.5 3.6-1.6 4.3-1 .8-2.6 1.2-4.7 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.6-2.2-1.6-4.3v-6.7c-2.2 3.8-5.5 7-9.9 9.6-4.4 2.6-9.8 3.9-16.2 3.9-5.5 0-10.4-1-14.6-2.9-4.2-1.9-7.8-4.6-10.8-8-3-3.4-5.2-7.5-6.7-12.3-1.5-4.8-2.3-10-2.3-15.7 0-5.7.8-10.9 2.3-15.7 1.5-4.7 3.8-8.8 6.7-12.2 3-3.4 6.6-6 10.8-7.9s9.1-2.8 14.6-2.8c3.2 0 6.2.4 9 1.2 2.8.8 5.2 1.7 7.4 2.9 2.1 1.2 4 2.5 5.6 4 1.6 1.5 2.8 3 3.6 4.4V79.4c0-2.2.6-3.7 1.8-4.6 1.2-.8 2.8-1.2 4.9-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.7 2.3 1.7 4.6V170.8zM192.9 139.1c0 8.4 2 15.1 5.9 20.1 4 5 9.6 7.5 17 7.5 3.8 0 7.1-.7 10-2.1 2.9-1.4 5.4-3.4 7.4-5.9 2-2.5 3.5-5.5 4.5-8.9 1-3.4 1.5-7.2 1.5-11.2 0-8.6-2.1-15.3-6.3-20.2-4.2-4.9-10-7.3-17.5-7.3-3.8 0-7 .7-9.9 2-2.8 1.4-5.2 3.3-7 5.7-1.9 2.5-3.3 5.4-4.2 8.8C193.3 131.2 192.9 135 192.9 139.1zM268.4 81.5c0-2.5.8-4.5 2.4-5.9 1.6-1.4 3.6-2.1 6-2.1 2.4 0 4.4.7 6 2.1 1.6 1.4 2.4 3.4 2.4 5.9 0 2.5-.8 4.5-2.4 5.9-1.6 1.4-3.6 2.1-6 2.1-2.4 0-4.4-.7-6-2.1C269.2 85.9 268.4 84 268.4 81.5zM270.3 107.3c0-2.2.6-3.7 1.7-4.6 1.1-.8 2.8-1.2 4.8-1.2 2.1 0 3.7.4 4.9 1.2 1.2.8 1.8 2.3 1.8 4.6v63.2c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107.3zM352.2 129.9V127c0-5.5-1.5-9.6-4.6-12.3-3.1-2.7-8.1-4.1-14.9-4.1-2.7 0-5.1.3-7 .9-2 .6-3.7 1.3-5.1 2-1.4.8-2.6 1.6-3.4 2.5-.9.9-1.6 1.6-2.3 2.3-1 1.2-1.9 1.9-2.7 2.3-.7.4-1.7.6-2.8.6-1.7 0-3.2-.5-4.6-1.4-1.4-.9-2.1-2.1-2.1-3.6 0-.8.1-1.4.2-1.9.2-.5.4-1 .7-1.6.1-.3.7-1.1 1.9-2.5 1.1-1.4 2.9-2.8 5.2-4.3 2.3-1.5 5.4-2.9 9.1-4.1 3.7-1.2 8.2-1.8 13.5-1.8 5.9 0 11 .7 15.1 2.1 4.1 1.4 7.4 3.3 9.9 5.6s4.3 5 5.5 8c1.1 3 1.7 6.2 1.7 9.5v46.2c0 3.2-2.2 4.8-6.7 4.8-3 0-4.9-.6-5.6-1.9-.7-1.3-1-3-1-5.2v-4.3c-1 1.4-2.3 2.8-3.8 4.2-1.5 1.5-3.3 2.8-5.4 4-2.1 1.2-4.7 2.2-7.7 3-3 .8-6.4 1.2-10.2 1.2-4.7 0-8.7-.5-12.1-1.6-3.4-1.1-6.2-2.5-8.4-4.4-2.2-1.9-3.9-4.1-5-6.7-1.1-2.6-1.6-5.3-1.6-8.2 0-3.8.7-7.2 2.2-10.4 1.5-3.2 4-5.9 7.5-8.2 3.5-2.3 8.3-4.1 14.2-5.4 5.9-1.3 13.3-2.1 22.3-2.2L352.2 129.9zM343.6 139.8c-6.7.1-12.1.5-16.3 1.3-4.2.8-7.5 1.8-9.9 3.1-2.4 1.3-4 2.9-4.9 4.7-.9 1.8-1.3 3.9-1.3 6.2 0 3.3 1.2 6.1 3.7 8.5 2.4 2.4 6.5 3.6 12.1 3.6 4.9 0 9.4-1 13.4-3.1 4-2.1 7.1-4.7 9.2-7.8 1.8-2.6 2.7-6.1 2.7-10.6v-6.1L343.6 139.8zM379.6 112.9c-2.1 0-3.5-.5-4.2-1.4-.7-.9-1.1-2.2-1.1-3.8 0-1.6.4-2.9 1.1-3.8.7-.9 2.1-1.4 4.2-1.4h7V87.6c0-1.8.2-3.2.5-4.1.4-.9 1.1-1.6 2.3-2.3 1.9-1.1 3.9-1.6 6.1-1.6 2.9 0 4.4 1.4 4.4 4.2v18.7h14.7c2.1 0 3.5.5 4.2 1.4.7.9 1.1 2.2 1.1 3.8 0 1.6-.4 2.9-1.1 3.8-.7.9-2.1 1.4-4.2 1.4H400v42.9c0 4.3.7 7.2 2.1 8.7 1.4 1.5 3.8 2.3 7.1 2.3 1.3 0 2.3-.1 3.2-.4.9-.3 1.7-.6 2.4-.9.7-.3 1.4-.6 2.1-.9.7-.3 1.5-.4 2.4-.4 1.5 0 2.7.6 3.8 1.7 1.1 1.2 1.6 2.6 1.6 4.2 0 2.3-1.6 4.1-4.8 5.4-3.2 1.3-7.3 2-12.2 2-7.2 0-12.5-1.6-16-4.9-3.4-3.2-5.2-7.9-5.2-14.1v-45.7H379.6zM500.5 137.1c0 3.5-2.1 5.2-6.4 5.2h-53.2c0 7.8 2.1 13.9 6.3 18.1 4.2 4.3 10.2 6.4 17.9 6.4 3 0 5.7-.4 7.9-1.1 2.2-.7 4.1-1.6 5.7-2.6 1.6-1 2.8-2.1 3.8-3.1 1-1.1 1.8-2 2.4-2.8.7-1 1.4-1.7 2.1-2.2.7-.5 1.7-.7 3-.7 1.5 0 2.9.4 4.3 1.3 1.4.9 2.1 2 2.1 3.5 0 1.3-.6 2.8-1.7 4.5-.9 1.4-2.2 2.8-3.7 4.4-1.5 1.6-3.4 3.1-5.8 4.6-2.3 1.5-5.2 2.7-8.5 3.6-3.3 1-7.2 1.5-11.7 1.5-5.8 0-11.1-.9-15.9-2.8-4.7-1.9-8.8-4.5-12.1-8-3.3-3.4-5.9-7.5-7.7-12.3-1.8-4.8-2.7-10-2.7-15.7 0-5.8.9-11.1 2.7-15.8 1.8-4.7 4.3-8.8 7.6-12.2 3.3-3.4 7.2-6.1 11.9-8 4.6-1.9 9.8-2.8 15.6-2.8 5.8 0 11 .9 15.5 2.8 4.5 1.9 8.2 4.5 11.3 7.8 3 3.3 5.3 7.3 6.9 11.8C499.7 127 500.5 131.9 500.5 137.1zM464.6 110.6c-3.7 0-6.8.6-9.5 1.7-2.7 1.1-5 2.6-6.9 4.5s-3.4 4.1-4.5 6.7c-1.1 2.6-1.8 5.2-2.1 8h45.5c-.3-2.7-1-5.3-2-7.9-1-2.6-2.4-4.8-4.2-6.7-1.8-1.9-4.1-3.4-6.8-4.6C471.4 111.2 468.2 110.6 464.6 110.6zM602.4 100c8.2 0 14.8 2.1 19.6 6.2 4.8 4.1 7.2 10.4 7.2 18.9v46.1c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.9-10.2 2.6-2.7 1.7-4.8 4-6.4 6.7-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v31.5c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.8-10.2 2.5-2.7 1.7-4.8 3.9-6.4 6.6-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v30.9c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107c0-2.1.5-3.6 1.6-4.3 1-.8 2.6-1.2 4.7-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.6 2.2 1.6 4.3v6.8c.1-.4.5-1.3 1.3-2.6.8-1.5 2.2-3.1 4.1-4.8 1.9-1.6 4.4-3.1 7.6-4.4 3.2-1.3 7.2-2 12-2 6.4 0 11.5 1.2 15.6 3.6 4 2.4 6.9 5.6 8.7 9.6 2.2-4 5.6-7.2 10.2-9.6C590.7 101.2 596.1 100 602.4 100z" /></g><path d="M138.9,105L72.6,36.6c-4.4-4.5-11.9-5-16.8-1.1C29.7,56.2,16.9,73.9,2.4,106.4c-6.7,15.1,1.4,28.5,17.9,29.7 l103,20.4c6,0.4,12.3-3.9,13.9-9.7l6.5-23.4C145.2,117.6,143.1,109.3,138.9,105z" fill="#61c5e8" /><path d="M162.2,72.5l-14.7-59.7C145.7,5.6,138.3-0.4,131,0C116.9,0.9,103,4.1,88,10.4c-6.8,2.8-8.2,10.1-3.5,15.7 l59.2,70.4c4.7,5.6,11.5,5.4,15.1-0.5C162.4,90.1,163.9,79.6,162.2,72.5z" fill="#ed6f30" /><path d="M192.1,70.8l8.7-26.3c3-9.1,0.2-22.2-7.1-28.5c-5-4.3-10.5-8.6-16.1-12.3c-8-5.3-14.7-0.6-14.1,9l2.9,45 c0.6,9.6,5.4,20.1,10.7,23.4C182.4,84.5,189.1,79.9,192.1,70.8z" fill="#80bc49" /><path class="st0000" d="M232.5 217.2c0 1.8-.3 3.4-.8 4.9-.5 1.5-1.3 2.7-2.3 3.7-1 1-2.2 1.8-3.6 2.4-1.4.6-3 .9-4.7.9-1.8 0-3.4-.3-4.8-.8-1.4-.6-2.6-1.4-3.6-2.4-1-1-1.7-2.3-2.3-3.7-.5-1.5-.8-3.1-.8-4.9 0-1.8.3-3.4.8-4.8s1.3-2.7 2.4-3.7c1-1 2.2-1.8 3.6-2.4 1.4-.6 3-.8 4.7-.8 1.7 0 3.3.3 4.7.8 1.4.6 2.6 1.3 3.6 2.3 1 1 1.8 2.2 2.3 3.7C232.2 213.8 232.5 215.4 232.5 217.2zM226.5 217.4c0-2.1-.5-3.8-1.4-5-.9-1.2-2.3-1.8-4-1.8-1.7 0-3 .6-3.9 1.8-1 1.2-1.4 2.9-1.4 5 0 2.1.5 3.8 1.4 5 1 1.2 2.3 1.8 3.9 1.8 1.7 0 3.1-.6 4-1.8C226 221.2 226.5 219.5 226.5 217.4zM249.8 205.5c1.5 0 2.7.2 3.7.7s1.8 1.2 2.6 2c.7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C246.9 205.9 248.2 205.5 249.8 205.5zM276 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C273.1 205.9 274.5 205.5 276 205.5zM299.9 205.5c3.1 0 5.6 1 7.5 2.9 1.8 1.9 2.8 4.7 2.8 8.3 0 .8-.3 1.4-.8 1.7-.5.3-1.2.5-2.1.5h-12.5c.3 3.5 2.2 5.3 5.7 5.3.9 0 1.7-.2 2.3-.5.6-.3 1.2-.6 1.6-.8.4-.2.8-.5 1.2-.7s.8-.3 1.3-.3c.6 0 1.1.3 1.6.9.5.6.7 1.2.7 1.9 0 .5-.2 1-.5 1.4s-.8.8-1.5 1.2c-.9.6-2 1-3.3 1.3-1.3.3-2.5.5-3.8.5-1.8 0-3.4-.2-4.8-.7-1.4-.5-2.7-1.2-3.7-2.1s-1.8-2.1-2.3-3.6c-.5-1.4-.8-3.2-.8-5.1 0-1.5.2-3 .6-4.4s1.1-2.7 2-3.8c.9-1.1 2.1-2 3.5-2.7S298 205.5 299.9 205.5zM304.2 214.5c0-.5-.1-1-.3-1.6-.2-.5-.4-1-.8-1.4-.4-.4-.8-.8-1.4-1-.5-.3-1.2-.4-2-.4-1.2 0-2.3.4-3.2 1.1s-1.4 1.9-1.6 3.3H304.2zM324.8 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C321.6 205.8 323.1 205.5 324.8 205.5zM196.5 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C193.3 205.8 194.9 205.5 196.5 205.5zM344.9 229.1c-1.9 0-3.4-.5-4.5-1.5s-1.7-2.6-1.7-4.7v-12.2h-1.8c-.5 0-.8-.3-1.1-.8-.2-.5-.3-1-.3-1.5 0-.5.1-1 .3-1.4s.6-.7 1.1-.7h1.9v-4.1c0-.5.1-1 .4-1.3s.6-.6.9-.9.8-.4 1.2-.5.9-.2 1.3-.2c.7 0 1.3.2 1.6.5s.5.8.5 1.4v5h3.5c.6 0 1 .2 1.2.6s.3.9.3 1.5c0 1.5-.5 2.3-1.6 2.3h-3.5v11.5c0 .7.1 1.1.4 1.4.2.3.6.4 1.1.4.3 0 .6 0 .9-.2s.5-.2.7-.3l.7-.3c.2-.1.5-.2.8-.2.7 0 1.3.3 1.6.9.3.6.5 1.2.5 1.8 0 .5-.1.9-.2 1.2-.2.4-.4.7-.8.9-.6.4-1.3.7-2.2.9S346.1 229.1 344.9 229.1zM357.9 197.2c.8 0 1.6.3 2.3.8.7.5 1.1 1.3 1.1 2.4 0 1-.3 1.7-.9 2.3-.6.6-1.4.9-2.4.9-1 0-1.8-.3-2.4-.9-.6-.6-.9-1.3-.9-2.3 0-.9.3-1.7.9-2.3C356 197.5 356.9 197.2 357.9 197.2zM357.9 228.7c-2 0-3-.8-3-2.3v-17.7c0-.8.2-1.5.7-2 .5-.5 1.3-.7 2.4-.7.9 0 1.6.2 2.1.6.5.4.8 1 .8 1.8v17.8c0 .9-.3 1.5-.8 1.8S358.8 228.7 357.9 228.7zM379.2 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6-.5-.4-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C376.3 205.9 377.7 205.5 379.2 205.5zM413.7 227c0 1.9-.2 3.6-.7 4.9-.5 1.4-1.2 2.5-2.1 3.4s-2.1 1.5-3.4 2c-1.4.4-2.9.6-4.7.6-2.1 0-3.7-.2-4.9-.5-1.2-.4-2.1-.8-2.7-1.2-.7-.5-1-1.1-1-1.9 0-.7.2-1.4.6-2 .4-.6 1-.9 1.8-.9.4 0 .8.1 1.2.3.3.2.7.4 1.2.6s.9.4 1.5.6 1.4.3 2.4.3c1.6 0 2.8-.4 3.7-1.3.9-.9 1.4-2.2 1.4-4v-2.4c-.6.7-1.4 1.4-2.5 2s-2.4.9-4 .9c-1.5 0-2.8-.3-4-.8-1.2-.5-2.2-1.3-3-2.3-.8-1-1.4-2.2-1.9-3.5-.4-1.4-.7-2.9-.7-4.7 0-1.7.2-3.3.7-4.7.5-1.4 1.1-2.6 1.9-3.6.8-1 1.8-1.8 3-2.3s2.5-.8 4-.8c.9 0 1.7.1 2.3.3.7.2 1.3.5 1.8.8s1 .6 1.3 1c.4.4.7.7.9 1v-.9c0-.7.3-1.2.8-1.5.5-.3 1.2-.4 1.9-.4 1.1 0 1.8.3 2.3.8.5.5.7 1.1.7 1.9V227zM408.1 217.1c0-1.9-.4-3.5-1.2-4.7-.8-1.2-2.1-1.8-3.8-1.8-1.5 0-2.7.6-3.6 1.8-.8 1.2-1.3 2.7-1.3 4.7 0 1.9.4 3.5 1.3 4.6.8 1.1 2 1.7 3.5 1.7 1.7 0 3-.5 3.8-1.6C407.6 220.6 408.1 219.1 408.1 217.1zM448.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C448.6 213.9 448.8 215.3 448.8 216.8zM439.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S440.2 208.3 439.1 208.3zM451.8 209.2c-.1-.2-.2-.5-.3-.8-.1-.3-.2-.5-.2-.8 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .8.3 1 .9l7.2 18.3 7.6-18.3c.1-.3.3-.5.5-.7.2-.1.4-.2.6-.2.3 0 .7.1 1 .3s.5.4.5.8c0 .3-.1.7-.4 1.3l-8.2 18.9c-.1.3-.3.5-.6.7s-.6.2-1.1.2c-.5 0-.8-.1-1.1-.2-.2-.1-.4-.3-.5-.6L451.8 209.2zM493.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C493.6 213.9 493.8 215.3 493.8 216.8zM484.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S485.3 208.3 484.1 208.3zM501.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3c-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v4c.4-1 1-1.8 1.6-2.5.6-.7 1.3-1.2 1.9-1.7.7-.4 1.3-.7 2-.9.7-.2 1.3-.3 1.8-.3.6 0 1 .1 1.3.3s.4.6.4 1.1c0 .5-.1.9-.3 1.1s-.6.3-1 .3c-2.3 0-4.1.8-5.5 2.3-1.3 1.5-2 3.8-2 6.8V227.4zM519.4 236.6c-.3.6-.6.9-1.1.9-.3 0-.6-.1-.9-.3-.2-.2-.4-.5-.4-.8 0-.2.1-.6.3-1.1l3.2-7.2-8.2-19.5c-.1-.1-.1-.3-.2-.5-.1-.2-.1-.4-.1-.5 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .7.3.9.9l7.3 17.5 7.6-17.5c.2-.6.5-.9.9-.9.4 0 .7.1 1 .3s.5.4.5.8c0 .1 0 .3-.1.5s-.1.4-.2.5L519.4 236.6zM535 209c-.3 0-.6-.1-.7-.3-.1-.2-.2-.5-.2-.8 0-.3.1-.6.2-.8.1-.2.3-.3.7-.3h2.7v-4.9c0-.5 0-.8.1-1.1s.2-.4.4-.5c.2-.1.5-.2.7-.3s.5-.1.7-.1c.4 0 .6.2.6.7v6.1h4.9c.3 0 .6.1.7.3s.2.5.2.8c0 .3-.1.6-.2.8s-.3.3-.7.3h-4.9v13.9c0 1.5.3 2.6.8 3.1s1.4.8 2.6.8c.5 0 .9 0 1.2-.2.3-.1.6-.2.9-.4.1-.1.3-.1.4-.2.1-.1.3-.1.4-.1.2 0 .4.1.6.4s.3.6.3.9c0 .6-.4 1-1.2 1.3s-1.8.5-3 .5c-1.9 0-3.2-.5-4.1-1.4s-1.3-2.2-1.3-4V209H535zM553.7 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-28c0-.5.1-.8.4-.9.2-.2.5-.2.9-.2.4 0 .7.1.9.2.2.2.4.5.4.9v12c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.5-1.8s1.4-1.1 2.4-1.5c1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM575.3 200.1c0-.6.2-1.1.5-1.4.3-.3.8-.5 1.2-.5s.9.2 1.2.5c.3.3.5.8.5 1.4 0 .6-.2 1.1-.5 1.4s-.8.5-1.2.5-.9-.2-1.2-.5S575.3 200.7 575.3 200.1zM575.8 207.8c0-.5.1-.8.3-1 .2-.2.5-.3.9-.3s.7.1.9.3.3.5.3 1v19.6c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1V207.8zM587.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v3.9c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.6-1.8.7-.6 1.5-1.1 2.4-1.5 1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM627.8 228.7c0 3.1-.9 5.4-2.7 7-1.8 1.5-4.2 2.3-7.1 2.3-1.2 0-2.3-.1-3.3-.3-1-.2-1.9-.5-2.6-.8-.7-.3-1.2-.6-1.6-.9-.4-.3-.6-.7-.6-1.1 0-.3.1-.7.3-1s.5-.5.8-.5c.3 0 .5.1.8.3s.6.4 1 .6c.6.3 1.3.7 2.1 1 .8.3 1.8.5 3 .5 1 0 1.9-.1 2.8-.4.9-.3 1.6-.7 2.3-1.2.7-.6 1.2-1.3 1.6-2.2.4-.9.6-2 .6-3.4v-3.8c-.8 1.5-1.8 2.7-3.1 3.4-1.3.7-2.8 1-4.6 1-1.5 0-2.9-.3-4-.9-1.2-.6-2.2-1.4-3-2.4-.8-1-1.4-2.2-1.8-3.6-.4-1.4-.6-3-.6-4.6 0-1.7.2-3.2.6-4.6s1.1-2.6 1.9-3.6c.8-1 1.8-1.8 3-2.3s2.6-.8 4.1-.8c1.8 0 3.4.4 4.6 1.1 1.2.7 2.2 1.7 3 2.9v-2.4c0-.5.1-.8.3-1s.5-.3.9-.3.7.1.9.3.3.5.3 1V228.7zM610.8 217.7c0 1.3.2 2.6.5 3.7s.8 2.1 1.4 2.9c.6.8 1.4 1.4 2.3 1.8.9.4 2 .6 3.1.6 1.2 0 2.3-.2 3.2-.7.9-.5 1.7-1.1 2.3-1.9.6-.8 1.1-1.8 1.4-2.9.3-1.1.5-2.4.5-3.7 0-2.9-.7-5.1-2.1-6.7-1.4-1.6-3.2-2.4-5.6-2.4-1.2 0-2.2.2-3.1.7-.9.4-1.6 1.1-2.2 1.9s-1 1.8-1.3 2.9C611 215 610.8 216.3 610.8 217.7z" fill="#fff" /></symbol><symbol viewBox="0 0 630.7 237.9" id="logo-diatem--white-only"><g fill="#fff"><path class="st0000" d="M252 170.8c0 2.1-.5 3.6-1.6 4.3-1 .8-2.6 1.2-4.7 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.6-2.2-1.6-4.3v-6.7c-2.2 3.8-5.5 7-9.9 9.6-4.4 2.6-9.8 3.9-16.2 3.9-5.5 0-10.4-1-14.6-2.9-4.2-1.9-7.8-4.6-10.8-8-3-3.4-5.2-7.5-6.7-12.3-1.5-4.8-2.3-10-2.3-15.7 0-5.7.8-10.9 2.3-15.7 1.5-4.7 3.8-8.8 6.7-12.2 3-3.4 6.6-6 10.8-7.9s9.1-2.8 14.6-2.8c3.2 0 6.2.4 9 1.2 2.8.8 5.2 1.7 7.4 2.9 2.1 1.2 4 2.5 5.6 4 1.6 1.5 2.8 3 3.6 4.4V79.4c0-2.2.6-3.7 1.8-4.6 1.2-.8 2.8-1.2 4.9-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.7 2.3 1.7 4.6V170.8zM192.9 139.1c0 8.4 2 15.1 5.9 20.1 4 5 9.6 7.5 17 7.5 3.8 0 7.1-.7 10-2.1 2.9-1.4 5.4-3.4 7.4-5.9 2-2.5 3.5-5.5 4.5-8.9 1-3.4 1.5-7.2 1.5-11.2 0-8.6-2.1-15.3-6.3-20.2-4.2-4.9-10-7.3-17.5-7.3-3.8 0-7 .7-9.9 2-2.8 1.4-5.2 3.3-7 5.7-1.9 2.5-3.3 5.4-4.2 8.8C193.3 131.2 192.9 135 192.9 139.1zM268.4 81.5c0-2.5.8-4.5 2.4-5.9 1.6-1.4 3.6-2.1 6-2.1 2.4 0 4.4.7 6 2.1 1.6 1.4 2.4 3.4 2.4 5.9 0 2.5-.8 4.5-2.4 5.9-1.6 1.4-3.6 2.1-6 2.1-2.4 0-4.4-.7-6-2.1C269.2 85.9 268.4 84 268.4 81.5zM270.3 107.3c0-2.2.6-3.7 1.7-4.6 1.1-.8 2.8-1.2 4.8-1.2 2.1 0 3.7.4 4.9 1.2 1.2.8 1.8 2.3 1.8 4.6v63.2c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107.3zM352.2 129.9V127c0-5.5-1.5-9.6-4.6-12.3-3.1-2.7-8.1-4.1-14.9-4.1-2.7 0-5.1.3-7 .9-2 .6-3.7 1.3-5.1 2-1.4.8-2.6 1.6-3.4 2.5-.9.9-1.6 1.6-2.3 2.3-1 1.2-1.9 1.9-2.7 2.3-.7.4-1.7.6-2.8.6-1.7 0-3.2-.5-4.6-1.4-1.4-.9-2.1-2.1-2.1-3.6 0-.8.1-1.4.2-1.9.2-.5.4-1 .7-1.6.1-.3.7-1.1 1.9-2.5 1.1-1.4 2.9-2.8 5.2-4.3 2.3-1.5 5.4-2.9 9.1-4.1 3.7-1.2 8.2-1.8 13.5-1.8 5.9 0 11 .7 15.1 2.1 4.1 1.4 7.4 3.3 9.9 5.6s4.3 5 5.5 8c1.1 3 1.7 6.2 1.7 9.5v46.2c0 3.2-2.2 4.8-6.7 4.8-3 0-4.9-.6-5.6-1.9-.7-1.3-1-3-1-5.2v-4.3c-1 1.4-2.3 2.8-3.8 4.2-1.5 1.5-3.3 2.8-5.4 4-2.1 1.2-4.7 2.2-7.7 3-3 .8-6.4 1.2-10.2 1.2-4.7 0-8.7-.5-12.1-1.6-3.4-1.1-6.2-2.5-8.4-4.4-2.2-1.9-3.9-4.1-5-6.7-1.1-2.6-1.6-5.3-1.6-8.2 0-3.8.7-7.2 2.2-10.4 1.5-3.2 4-5.9 7.5-8.2 3.5-2.3 8.3-4.1 14.2-5.4 5.9-1.3 13.3-2.1 22.3-2.2L352.2 129.9zM343.6 139.8c-6.7.1-12.1.5-16.3 1.3-4.2.8-7.5 1.8-9.9 3.1-2.4 1.3-4 2.9-4.9 4.7-.9 1.8-1.3 3.9-1.3 6.2 0 3.3 1.2 6.1 3.7 8.5 2.4 2.4 6.5 3.6 12.1 3.6 4.9 0 9.4-1 13.4-3.1 4-2.1 7.1-4.7 9.2-7.8 1.8-2.6 2.7-6.1 2.7-10.6v-6.1L343.6 139.8zM379.6 112.9c-2.1 0-3.5-.5-4.2-1.4-.7-.9-1.1-2.2-1.1-3.8 0-1.6.4-2.9 1.1-3.8.7-.9 2.1-1.4 4.2-1.4h7V87.6c0-1.8.2-3.2.5-4.1.4-.9 1.1-1.6 2.3-2.3 1.9-1.1 3.9-1.6 6.1-1.6 2.9 0 4.4 1.4 4.4 4.2v18.7h14.7c2.1 0 3.5.5 4.2 1.4.7.9 1.1 2.2 1.1 3.8 0 1.6-.4 2.9-1.1 3.8-.7.9-2.1 1.4-4.2 1.4H400v42.9c0 4.3.7 7.2 2.1 8.7 1.4 1.5 3.8 2.3 7.1 2.3 1.3 0 2.3-.1 3.2-.4.9-.3 1.7-.6 2.4-.9.7-.3 1.4-.6 2.1-.9.7-.3 1.5-.4 2.4-.4 1.5 0 2.7.6 3.8 1.7 1.1 1.2 1.6 2.6 1.6 4.2 0 2.3-1.6 4.1-4.8 5.4-3.2 1.3-7.3 2-12.2 2-7.2 0-12.5-1.6-16-4.9-3.4-3.2-5.2-7.9-5.2-14.1v-45.7H379.6zM500.5 137.1c0 3.5-2.1 5.2-6.4 5.2h-53.2c0 7.8 2.1 13.9 6.3 18.1 4.2 4.3 10.2 6.4 17.9 6.4 3 0 5.7-.4 7.9-1.1 2.2-.7 4.1-1.6 5.7-2.6 1.6-1 2.8-2.1 3.8-3.1 1-1.1 1.8-2 2.4-2.8.7-1 1.4-1.7 2.1-2.2.7-.5 1.7-.7 3-.7 1.5 0 2.9.4 4.3 1.3 1.4.9 2.1 2 2.1 3.5 0 1.3-.6 2.8-1.7 4.5-.9 1.4-2.2 2.8-3.7 4.4-1.5 1.6-3.4 3.1-5.8 4.6-2.3 1.5-5.2 2.7-8.5 3.6-3.3 1-7.2 1.5-11.7 1.5-5.8 0-11.1-.9-15.9-2.8-4.7-1.9-8.8-4.5-12.1-8-3.3-3.4-5.9-7.5-7.7-12.3-1.8-4.8-2.7-10-2.7-15.7 0-5.8.9-11.1 2.7-15.8 1.8-4.7 4.3-8.8 7.6-12.2 3.3-3.4 7.2-6.1 11.9-8 4.6-1.9 9.8-2.8 15.6-2.8 5.8 0 11 .9 15.5 2.8 4.5 1.9 8.2 4.5 11.3 7.8 3 3.3 5.3 7.3 6.9 11.8C499.7 127 500.5 131.9 500.5 137.1zM464.6 110.6c-3.7 0-6.8.6-9.5 1.7-2.7 1.1-5 2.6-6.9 4.5s-3.4 4.1-4.5 6.7c-1.1 2.6-1.8 5.2-2.1 8h45.5c-.3-2.7-1-5.3-2-7.9-1-2.6-2.4-4.8-4.2-6.7-1.8-1.9-4.1-3.4-6.8-4.6C471.4 111.2 468.2 110.6 464.6 110.6zM602.4 100c8.2 0 14.8 2.1 19.6 6.2 4.8 4.1 7.2 10.4 7.2 18.9v46.1c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.9-10.2 2.6-2.7 1.7-4.8 4-6.4 6.7-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v31.5c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.8-10.2 2.5-2.7 1.7-4.8 3.9-6.4 6.6-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v30.9c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107c0-2.1.5-3.6 1.6-4.3 1-.8 2.6-1.2 4.7-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.6 2.2 1.6 4.3v6.8c.1-.4.5-1.3 1.3-2.6.8-1.5 2.2-3.1 4.1-4.8 1.9-1.6 4.4-3.1 7.6-4.4 3.2-1.3 7.2-2 12-2 6.4 0 11.5 1.2 15.6 3.6 4 2.4 6.9 5.6 8.7 9.6 2.2-4 5.6-7.2 10.2-9.6C590.7 101.2 596.1 100 602.4 100z" /></g><path class="st11111" d="M138.9,105L72.6,36.6c-4.4-4.5-11.9-5-16.8-1.1C29.7,56.2,16.9,73.9,2.4,106.4c-6.7,15.1,1.4,28.5,17.9,29.7 l103,20.4c6,0.4,12.3-3.9,13.9-9.7l6.5-23.4C145.2,117.6,143.1,109.3,138.9,105z" fill="#fff" /><path class="st222222" d="M162.2,72.5l-14.7-59.7C145.7,5.6,138.3-0.4,131,0C116.9,0.9,103,4.1,88,10.4c-6.8,2.8-8.2,10.1-3.5,15.7 l59.2,70.4c4.7,5.6,11.5,5.4,15.1-0.5C162.4,90.1,163.9,79.6,162.2,72.5z" fill="#fff" /><path class="st333333" d="M192.1,70.8l8.7-26.3c3-9.1,0.2-22.2-7.1-28.5c-5-4.3-10.5-8.6-16.1-12.3c-8-5.3-14.7-0.6-14.1,9l2.9,45 c0.6,9.6,5.4,20.1,10.7,23.4C182.4,84.5,189.1,79.9,192.1,70.8z" fill="#fff" /><path class="st0000" d="M232.5 217.2c0 1.8-.3 3.4-.8 4.9-.5 1.5-1.3 2.7-2.3 3.7-1 1-2.2 1.8-3.6 2.4-1.4.6-3 .9-4.7.9-1.8 0-3.4-.3-4.8-.8-1.4-.6-2.6-1.4-3.6-2.4-1-1-1.7-2.3-2.3-3.7-.5-1.5-.8-3.1-.8-4.9 0-1.8.3-3.4.8-4.8s1.3-2.7 2.4-3.7c1-1 2.2-1.8 3.6-2.4 1.4-.6 3-.8 4.7-.8 1.7 0 3.3.3 4.7.8 1.4.6 2.6 1.3 3.6 2.3 1 1 1.8 2.2 2.3 3.7C232.2 213.8 232.5 215.4 232.5 217.2zM226.5 217.4c0-2.1-.5-3.8-1.4-5-.9-1.2-2.3-1.8-4-1.8-1.7 0-3 .6-3.9 1.8-1 1.2-1.4 2.9-1.4 5 0 2.1.5 3.8 1.4 5 1 1.2 2.3 1.8 3.9 1.8 1.7 0 3.1-.6 4-1.8C226 221.2 226.5 219.5 226.5 217.4zM249.8 205.5c1.5 0 2.7.2 3.7.7s1.8 1.2 2.6 2c.7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C246.9 205.9 248.2 205.5 249.8 205.5zM276 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6s-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C273.1 205.9 274.5 205.5 276 205.5zM299.9 205.5c3.1 0 5.6 1 7.5 2.9 1.8 1.9 2.8 4.7 2.8 8.3 0 .8-.3 1.4-.8 1.7-.5.3-1.2.5-2.1.5h-12.5c.3 3.5 2.2 5.3 5.7 5.3.9 0 1.7-.2 2.3-.5.6-.3 1.2-.6 1.6-.8.4-.2.8-.5 1.2-.7s.8-.3 1.3-.3c.6 0 1.1.3 1.6.9.5.6.7 1.2.7 1.9 0 .5-.2 1-.5 1.4s-.8.8-1.5 1.2c-.9.6-2 1-3.3 1.3-1.3.3-2.5.5-3.8.5-1.8 0-3.4-.2-4.8-.7-1.4-.5-2.7-1.2-3.7-2.1s-1.8-2.1-2.3-3.6c-.5-1.4-.8-3.2-.8-5.1 0-1.5.2-3 .6-4.4s1.1-2.7 2-3.8c.9-1.1 2.1-2 3.5-2.7S298 205.5 299.9 205.5zM304.2 214.5c0-.5-.1-1-.3-1.6-.2-.5-.4-1-.8-1.4-.4-.4-.8-.8-1.4-1-.5-.3-1.2-.4-2-.4-1.2 0-2.3.4-3.2 1.1s-1.4 1.9-1.6 3.3H304.2zM324.8 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C321.6 205.8 323.1 205.5 324.8 205.5zM196.5 205.5c1.6 0 2.9.2 4.1.6s2.1.9 2.9 1.5 1.4 1.2 1.7 1.9c.4.7.6 1.3.6 1.8 0 .7-.3 1.4-.8 1.8-.5.5-1.2.7-1.9.7-.5 0-1-.2-1.3-.5-.3-.3-.7-.7-1.1-1.1-.7-.6-1.3-1.1-1.9-1.4-.6-.4-1.4-.5-2.4-.5-1.2 0-2.1.3-2.8.8s-1.2 1.1-1.5 1.9-.6 1.5-.7 2.3c-.1.8-.2 1.5-.2 2 0 .6.1 1.3.2 2.1s.4 1.5.8 2.2.9 1.2 1.6 1.7c.7.5 1.6.7 2.7.7 1.1 0 1.9-.2 2.5-.5s1.3-.9 2-1.6c.3-.3.6-.6.9-.9.3-.2.7-.4 1.2-.4.3 0 .7.1 1 .2.3.1.6.3.9.6s.4.5.6.8c.2.3.2.6.2 1 0 .6-.2 1.2-.7 1.9-.4.7-1.1 1.3-1.9 1.9-.8.6-1.8 1.1-3 1.4-1.2.4-2.5.6-4.1.6-2 0-3.7-.3-5.1-1s-2.5-1.5-3.4-2.6c-.9-1.1-1.5-2.3-1.9-3.7s-.6-2.8-.6-4.3c0-1.9.3-3.6.8-5.2.5-1.5 1.3-2.8 2.3-3.8 1-1 2.2-1.8 3.6-2.4C193.3 205.8 194.9 205.5 196.5 205.5zM344.9 229.1c-1.9 0-3.4-.5-4.5-1.5s-1.7-2.6-1.7-4.7v-12.2h-1.8c-.5 0-.8-.3-1.1-.8-.2-.5-.3-1-.3-1.5 0-.5.1-1 .3-1.4s.6-.7 1.1-.7h1.9v-4.1c0-.5.1-1 .4-1.3s.6-.6.9-.9.8-.4 1.2-.5.9-.2 1.3-.2c.7 0 1.3.2 1.6.5s.5.8.5 1.4v5h3.5c.6 0 1 .2 1.2.6s.3.9.3 1.5c0 1.5-.5 2.3-1.6 2.3h-3.5v11.5c0 .7.1 1.1.4 1.4.2.3.6.4 1.1.4.3 0 .6 0 .9-.2s.5-.2.7-.3l.7-.3c.2-.1.5-.2.8-.2.7 0 1.3.3 1.6.9.3.6.5 1.2.5 1.8 0 .5-.1.9-.2 1.2-.2.4-.4.7-.8.9-.6.4-1.3.7-2.2.9S346.1 229.1 344.9 229.1zM357.9 197.2c.8 0 1.6.3 2.3.8.7.5 1.1 1.3 1.1 2.4 0 1-.3 1.7-.9 2.3-.6.6-1.4.9-2.4.9-1 0-1.8-.3-2.4-.9-.6-.6-.9-1.3-.9-2.3 0-.9.3-1.7.9-2.3C356 197.5 356.9 197.2 357.9 197.2zM357.9 228.7c-2 0-3-.8-3-2.3v-17.7c0-.8.2-1.5.7-2 .5-.5 1.3-.7 2.4-.7.9 0 1.6.2 2.1.6.5.4.8 1 .8 1.8v17.8c0 .9-.3 1.5-.8 1.8S358.8 228.7 357.9 228.7zM379.2 205.5c1.5 0 2.7.2 3.7.7 1 .5 1.8 1.2 2.6 2 .7 1 1.2 2.1 1.3 3.2.1 1.2.2 2.3.2 3.4v11.4c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2.2.6-.9 0-1.6-.2-2.1-.5s-.8-1-.8-1.8V215c0-1.3-.1-2.2-.4-2.8-.3-.6-.7-1-1.2-1.2-.5-.2-1.2-.3-1.9-.3-.8 0-1.4.1-2 .4-.5.2-1 .5-1.4.9-.4.4-.7.7-.9 1.1-.2.4-.3.8-.4 1.1-.1.5-.2 1.1-.2 1.8 0 .7 0 1.2 0 1.7v8.5c0 .9-.2 1.5-.7 1.9-.5.4-1.3.6-2.3.6-.9 0-1.6-.2-2.1-.6-.5-.4-.8-1-.8-1.8v-17.7c0-.8.2-1.4.7-1.9.4-.5 1.2-.7 2.3-.7.7 0 1.4.2 2 .5.6.3.9 1 .9 2v.5c.6-.9 1.5-1.7 2.6-2.3C376.3 205.9 377.7 205.5 379.2 205.5zM413.7 227c0 1.9-.2 3.6-.7 4.9-.5 1.4-1.2 2.5-2.1 3.4s-2.1 1.5-3.4 2c-1.4.4-2.9.6-4.7.6-2.1 0-3.7-.2-4.9-.5-1.2-.4-2.1-.8-2.7-1.2-.7-.5-1-1.1-1-1.9 0-.7.2-1.4.6-2 .4-.6 1-.9 1.8-.9.4 0 .8.1 1.2.3.3.2.7.4 1.2.6s.9.4 1.5.6 1.4.3 2.4.3c1.6 0 2.8-.4 3.7-1.3.9-.9 1.4-2.2 1.4-4v-2.4c-.6.7-1.4 1.4-2.5 2s-2.4.9-4 .9c-1.5 0-2.8-.3-4-.8-1.2-.5-2.2-1.3-3-2.3-.8-1-1.4-2.2-1.9-3.5-.4-1.4-.7-2.9-.7-4.7 0-1.7.2-3.3.7-4.7.5-1.4 1.1-2.6 1.9-3.6.8-1 1.8-1.8 3-2.3s2.5-.8 4-.8c.9 0 1.7.1 2.3.3.7.2 1.3.5 1.8.8s1 .6 1.3 1c.4.4.7.7.9 1v-.9c0-.7.3-1.2.8-1.5.5-.3 1.2-.4 1.9-.4 1.1 0 1.8.3 2.3.8.5.5.7 1.1.7 1.9V227zM408.1 217.1c0-1.9-.4-3.5-1.2-4.7-.8-1.2-2.1-1.8-3.8-1.8-1.5 0-2.7.6-3.6 1.8-.8 1.2-1.3 2.7-1.3 4.7 0 1.9.4 3.5 1.3 4.6.8 1.1 2 1.7 3.5 1.7 1.7 0 3-.5 3.8-1.6C407.6 220.6 408.1 219.1 408.1 217.1zM448.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C448.6 213.9 448.8 215.3 448.8 216.8zM439.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S440.2 208.3 439.1 208.3zM451.8 209.2c-.1-.2-.2-.5-.3-.8-.1-.3-.2-.5-.2-.8 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .8.3 1 .9l7.2 18.3 7.6-18.3c.1-.3.3-.5.5-.7.2-.1.4-.2.6-.2.3 0 .7.1 1 .3s.5.4.5.8c0 .3-.1.7-.4 1.3l-8.2 18.9c-.1.3-.3.5-.6.7s-.6.2-1.1.2c-.5 0-.8-.1-1.1-.2-.2-.1-.4-.3-.5-.6L451.8 209.2zM493.8 216.8c0 .4-.1.6-.3.8-.2.2-.5.2-.8.2h-16c.1 2.9.7 5.1 2 6.7 1.3 1.6 3.2 2.4 5.6 2.4 1 0 1.8-.1 2.5-.3s1.2-.5 1.7-.8c.5-.3.9-.7 1.2-1.1.3-.4.6-.8.8-1.1.2-.2.3-.4.4-.5.1-.1.3-.2.5-.2.3 0 .6.1.9.3s.4.4.4.7c0 .3-.1.7-.4 1.1-.3.4-.6.8-1 1.3s-.9.9-1.6 1.3c-.6.4-1.4.8-2.3 1.1-.9.3-1.9.4-3.1.4-1.7 0-3.2-.3-4.4-.8s-2.3-1.3-3.2-2.4c-.9-1-1.5-2.2-2-3.6-.4-1.4-.7-3-.7-4.7 0-1.7.2-3.2.7-4.6s1.2-2.6 2-3.6 2-1.8 3.2-2.4 2.6-.9 4.2-.9c1.6 0 3 .3 4.2.8s2.2 1.3 3 2.3c.8 1 1.4 2.1 1.8 3.4C493.6 213.9 493.8 215.3 493.8 216.8zM484.1 208.3c-1.2 0-2.2.2-3.1.6-.9.4-1.6.9-2.2 1.6s-1.1 1.5-1.4 2.4c-.3.9-.6 1.9-.6 2.9h14.6c-.1-1-.3-2-.6-2.9-.3-.9-.8-1.7-1.4-2.4-.6-.7-1.3-1.2-2.2-1.7S485.3 208.3 484.1 208.3zM501.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3c-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v4c.4-1 1-1.8 1.6-2.5.6-.7 1.3-1.2 1.9-1.7.7-.4 1.3-.7 2-.9.7-.2 1.3-.3 1.8-.3.6 0 1 .1 1.3.3s.4.6.4 1.1c0 .5-.1.9-.3 1.1s-.6.3-1 .3c-2.3 0-4.1.8-5.5 2.3-1.3 1.5-2 3.8-2 6.8V227.4zM519.4 236.6c-.3.6-.6.9-1.1.9-.3 0-.6-.1-.9-.3-.2-.2-.4-.5-.4-.8 0-.2.1-.6.3-1.1l3.2-7.2-8.2-19.5c-.1-.1-.1-.3-.2-.5-.1-.2-.1-.4-.1-.5 0-.4.2-.7.5-.8.3-.2.7-.3 1.1-.3.4 0 .7.3.9.9l7.3 17.5 7.6-17.5c.2-.6.5-.9.9-.9.4 0 .7.1 1 .3s.5.4.5.8c0 .1 0 .3-.1.5s-.1.4-.2.5L519.4 236.6zM535 209c-.3 0-.6-.1-.7-.3-.1-.2-.2-.5-.2-.8 0-.3.1-.6.2-.8.1-.2.3-.3.7-.3h2.7v-4.9c0-.5 0-.8.1-1.1s.2-.4.4-.5c.2-.1.5-.2.7-.3s.5-.1.7-.1c.4 0 .6.2.6.7v6.1h4.9c.3 0 .6.1.7.3s.2.5.2.8c0 .3-.1.6-.2.8s-.3.3-.7.3h-4.9v13.9c0 1.5.3 2.6.8 3.1s1.4.8 2.6.8c.5 0 .9 0 1.2-.2.3-.1.6-.2.9-.4.1-.1.3-.1.4-.2.1-.1.3-.1.4-.1.2 0 .4.1.6.4s.3.6.3.9c0 .6-.4 1-1.2 1.3s-1.8.5-3 .5c-1.9 0-3.2-.5-4.1-1.4s-1.3-2.2-1.3-4V209H535zM553.7 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-28c0-.5.1-.8.4-.9.2-.2.5-.2.9-.2.4 0 .7.1.9.2.2.2.4.5.4.9v12c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.5-1.8s1.4-1.1 2.4-1.5c1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM575.3 200.1c0-.6.2-1.1.5-1.4.3-.3.8-.5 1.2-.5s.9.2 1.2.5c.3.3.5.8.5 1.4 0 .6-.2 1.1-.5 1.4s-.8.5-1.2.5-.9-.2-1.2-.5S575.3 200.7 575.3 200.1zM575.8 207.8c0-.5.1-.8.3-1 .2-.2.5-.3.9-.3s.7.1.9.3.3.5.3 1v19.6c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1V207.8zM587.3 227.4c0 .5-.1.8-.3 1s-.5.3-.9.3-.7-.1-.9-.3c-.2-.2-.3-.5-.3-1v-19.7c0-.5.1-.8.3-.9.2-.2.5-.2.8-.2.4 0 .7.1.9.2s.3.5.3.9v3.9c.2-.4.4-.9.8-1.5.4-.6.9-1.2 1.6-1.8.7-.6 1.5-1.1 2.4-1.5 1-.4 2.1-.6 3.4-.6 2.2 0 4 .6 5.3 1.8s2 3.1 2 5.7v14c0 .7-.4 1-1.2 1-.9 0-1.3-.3-1.3-1v-13.1c0-1.9-.4-3.4-1.2-4.5-.8-1-2.2-1.5-4.2-1.5-1.3 0-2.5.3-3.5.9-1 .6-1.8 1.3-2.4 2.2-.6.9-1.1 1.9-1.4 3.1-.3 1.1-.4 2.2-.4 3.3V227.4zM627.8 228.7c0 3.1-.9 5.4-2.7 7-1.8 1.5-4.2 2.3-7.1 2.3-1.2 0-2.3-.1-3.3-.3-1-.2-1.9-.5-2.6-.8-.7-.3-1.2-.6-1.6-.9-.4-.3-.6-.7-.6-1.1 0-.3.1-.7.3-1s.5-.5.8-.5c.3 0 .5.1.8.3s.6.4 1 .6c.6.3 1.3.7 2.1 1 .8.3 1.8.5 3 .5 1 0 1.9-.1 2.8-.4.9-.3 1.6-.7 2.3-1.2.7-.6 1.2-1.3 1.6-2.2.4-.9.6-2 .6-3.4v-3.8c-.8 1.5-1.8 2.7-3.1 3.4-1.3.7-2.8 1-4.6 1-1.5 0-2.9-.3-4-.9-1.2-.6-2.2-1.4-3-2.4-.8-1-1.4-2.2-1.8-3.6-.4-1.4-.6-3-.6-4.6 0-1.7.2-3.2.6-4.6s1.1-2.6 1.9-3.6c.8-1 1.8-1.8 3-2.3s2.6-.8 4.1-.8c1.8 0 3.4.4 4.6 1.1 1.2.7 2.2 1.7 3 2.9v-2.4c0-.5.1-.8.3-1s.5-.3.9-.3.7.1.9.3.3.5.3 1V228.7zM610.8 217.7c0 1.3.2 2.6.5 3.7s.8 2.1 1.4 2.9c.6.8 1.4 1.4 2.3 1.8.9.4 2 .6 3.1.6 1.2 0 2.3-.2 3.2-.7.9-.5 1.7-1.1 2.3-1.9.6-.8 1.1-1.8 1.4-2.9.3-1.1.5-2.4.5-3.7 0-2.9-.7-5.1-2.1-6.7-1.4-1.6-3.2-2.4-5.6-2.4-1.2 0-2.2.2-3.1.7-.9.4-1.6 1.1-2.2 1.9s-1 1.8-1.3 2.9C611 215 610.8 216.3 610.8 217.7z" fill="#fff" /></symbol><symbol viewBox="0 0 32.808 29.104" id="logo-lightwords"><g aria-label="Words" style="line-height:1.25;-inkscape-font-specification:'Ubuntu, Medium Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start" font-style="italic" font-weight="500" font-size="25.555" font-family="Ubuntu" letter-spacing="0" word-spacing="0" fill="#e25d5d" stroke-width=".639"><path d="M75.29186 267.38224q.07666 1.37995.178883 2.88768.127773 1.50772.281101 3.01544.153327 1.48217.306655 2.91323.153328 1.43106.306656 2.65768.715529-1.35439 1.482168-2.96434.766639-1.63549 1.533277-3.37321.766639-1.73771 1.507723-3.55209.741084-1.83993 1.431059-3.6032h3.42432q-2.018816 4.93204-4.08874 9.32744-2.04437 4.39539-4.344286 8.38191h-3.117664q-.204437-1.37995-.408874-2.70879-.178883-1.32884-.357765-2.68323-.153328-1.37995-.306656-2.78546-.127773-1.43105-.255546-2.96433-1.584387 2.93878-3.143219 5.69868-1.533277 2.73434-3.270992 5.44313h-3.168773q-.204437-2.22325-.306656-4.42095-.07666-2.19769-.07666-4.49761 0-4.19096.306656-8.79079h3.219883q-.153328 2.45324-.255547 4.88093-.102218 2.40214-.102218 4.88094 0 .91996 0 1.86548 0 .91997.05111 1.86549.792194-1.30328 1.635496-2.73434.843303-1.45662 1.661051-2.93879.817748-1.48216 1.584386-2.96433.792194-1.48217 1.482169-2.83657zM89.472681 283.43055q-2.37658 0-3.628756-1.40551-1.252177-1.4055-1.252177-3.70542 0-1.48216.459983-3.06655.459983-1.58439 1.405505-2.88767.945521-1.30329 2.37658-2.14659 1.431059-.8433 3.37321-.8433 2.37658 0 3.628757 1.4055 1.252176 1.37995 1.252176 3.67987 0 1.50772-.459983 3.09211-.434428 1.58438-1.37995 2.88767-.919966 1.30328-2.37658 2.14659-1.431059.8433-3.398765.8433zm2.351026-11.44847q-.996631 0-1.788824.58775-.766639.56221-1.303286 1.45662-.511092.89441-.792193 1.9677-.281101 1.04774-.281101 2.04437 0 1.27773.485538 2.01882.485538.74108 1.71216.74108.99663 0 1.763269-.5622.792193-.58776 1.303286-1.45661.536647-.89441.817748-1.96771.2811-1.07329.2811-2.04437 0-1.27773-.485537-2.01881-.485538-.76664-1.71216-.76664zM108.24255 272.44206q-.51109-.17888-1.09884-.2811-.58776-.10222-1.37995-.10222-.43443 0-.91997.0767-.48554.0511-.81775.15332l-2.58102 10.78405h-3.092106l3.066556-12.75175q1.07329-.35777 2.32547-.61331 1.25218-.28111 2.70879-.28111.30666 0 .68998.0511.38331.0256.74108.0767.38332.0511.68997.12777.33221.0767.56221.17888zM113.44611 283.43055q-1.20106 0-2.06992-.38332-.86886-.40887-1.43106-1.09885-.53665-.68997-.79219-1.6355-.25555-.94552-.25555-2.04436 0-1.71216.58776-3.29655.61331-1.60994 1.71216-2.81101 1.1244-1.22662 2.73434-1.94215 1.60994-.74109 3.65431-.74109.25555 0 .61331.0256.35777.0256.7922.12777l1.4055-5.87756 3.21988-.51109-3.50098 14.48947q-.12777.58775-.20444 1.20107-.0511.58775-.0511 1.1244 0 .68997.12778 1.37995.12777.68997.40887 1.43106l-2.7599.40887q-.2811-.53665-.48554-1.30328-.63886.5622-1.55883 1.02218-.91997.43443-2.14659.43443zm4.93204-11.29514q-.48553-.10222-1.17551-.10222-1.17551 0-2.14659.51109-.97107.48554-1.66105 1.32884-.68997.81775-1.07329 1.89104-.35777 1.0733-.35777 2.22325 0 .58776.10222 1.09885.12778.5111.38332.89441.25555.38332.66442.61332.43443.22999 1.04774.22999.81775 0 1.43106-.33221.63887-.33221 1.20107-.91997.0256-.53665.10222-1.1244.10222-.58776.22999-1.14996zM126.81797 280.90064q1.22662 0 1.94215-.38332.71553-.40887.71553-1.22662 0-.66442-.45998-1.04774-.45998-.40887-1.60994-.94552-.61331-.2811-1.14996-.58776-.51109-.30665-.89441-.71553-.38332-.40887-.61331-.94552-.23-.5622-.23-1.32884 0-1.99326 1.45662-3.16877 1.45661-1.17551 4.21651-1.17551 1.27773 0 2.27436.2811 1.02219.25554 1.53328.53664l-1.09885 2.40214q-.43443-.25555-1.25218-.48554-.81774-.25555-1.71216-.25555-.43442 0-.86885.0767-.40888.0767-.74109.25554-.33221.17889-.5622.5111-.20444.30665-.20444.76664 0 .58775.45999.97107.48554.35777 1.37995.76664.8433.38332 1.43106.74108.58775.35777.97107.81775.38332.43443.5622.99663.17889.53665.17889 1.30329 0 .94552-.38332 1.76327-.38332.79219-1.12441 1.37995-.71553.5622-1.78882.89441-1.07329.33221-2.45324.33221-.94553 0-1.71216-.12777-.74109-.12778-1.30329-.2811-.5622-.17889-.94552-.35777-.38332-.17888-.58776-.30666l1.09885-2.42768q.17888.10221.51109.2811.35777.15332.7922.30665.45998.15333.99663.2811.5622.10222 1.17551.10222z" style="-inkscape-font-specification:'Ubuntu, Medium Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start" transform="matrix(.24745 0 0 .24823 -.35 -42.357)" /></g><path transform="matrix(1.29586 .34833 -.34723 1.29998 -47.757 -365.747)" fill="#e25d5d" d="M112.513 251.199H125.21300000000001V263.899H112.513z" /><g style="line-height:1.25;-inkscape-font-specification:'Ubuntu, Medium Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start"><path d="m 49.499051,276.74347 q 0.03175,0.5715 0.07408,1.19592 0.05292,0.62441 0.116416,1.24883 0.0635,0.61383 0.127,1.2065 0.0635,0.59267 0.127,1.10067 0.296334,-0.56092 0.613834,-1.22767 0.3175,-0.67733 0.635,-1.397 0.317499,-0.71966 0.624416,-1.47108 0.306917,-0.762 0.592667,-1.49225 h 1.418166 q -0.836083,2.04258 -1.693333,3.86291 -0.846666,1.82034 -1.799166,3.47134 h -1.291167 q -0.08467,-0.5715 -0.169333,-1.12184 -0.07408,-0.55033 -0.148167,-1.11125 -0.0635,-0.5715 -0.127,-1.15358 -0.05292,-0.59267 -0.105833,-1.22767 -0.656167,1.21709 -1.30175,2.36009 -0.635,1.13241 -1.354667,2.25425 h -1.312333 q -0.08467,-0.92075 -0.127,-1.83092 -0.03175,-0.91017 -0.03175,-1.86267 0,-1.73566 0.127,-3.64066 h 1.3335 q -0.0635,1.016 -0.105834,2.02142 -0.04233,0.99483 -0.04233,2.02141 0,0.381 0,0.77258 0,0.381 0.02117,0.77259 0.328083,-0.53975 0.677333,-1.13242 0.34925,-0.60325 0.687917,-1.21708 0.338666,-0.61384 0.656166,-1.22767 0.328084,-0.61383 0.613834,-1.17475 z" style="-inkscape-font-specification:'Ubuntu, Medium Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start" transform="matrix(1.34158 0 0 1.34584 -47.757 -365.747)" aria-label="W" font-style="italic" font-weight="500" font-size="10.583" font-family="Ubuntu" letter-spacing="0" word-spacing="0" fill="#fff" stroke-width=".265" /></g><g aria-label="Light" style="line-height:1.25;-inkscape-font-specification:'Ubuntu, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start" font-weight="400" font-size="25.555" font-family="Ubuntu" letter-spacing="0" word-spacing="0" stroke-width=".639"><path d="M12.067787 280.9262v2.14658H1.4115086v-17.70935h2.4787986v15.56277zM16.911187 283.07278h-2.37658v-13.2884h2.37658zM15.71012 267.38224q-.638866 0-1.098849-.40887-.434429-.43443-.434429-1.14996 0-.71553.434429-1.1244.459983-.43443 1.098849-.43443.638865 0 1.073294.43443.459983.40887.459983 1.1244 0 .71553-.459983 1.14996-.434429.40887-1.073294.40887zM29.353892 281.74394q-.306655.20444-1.201067.53665-.868857.30666-2.04437.30666-1.201067 0-2.274361-.38332-1.04774-.38332-1.839933-1.17552-.792194-.81774-1.252177-2.01881-.459983-1.20107-.459983-2.86212 0-1.45661.434428-2.65768.434429-1.22662 1.252177-2.09548.843303-.89441 2.04437-1.37995 1.201067-.51109 2.70879-.51109 1.661051 0 2.887673.25555 1.252176.22999 2.095479.43442v11.85735q0 3.06655-1.584387 4.4465-1.584387 1.37995-4.804269 1.37995-1.252177 0-2.37658-.20443-1.098849-.20444-1.916597-.48554l.434428-2.06993q.71553.28111 1.737715.48554 1.04774.22999 2.172143.22999 2.121034 0 3.041-.8433.945521-.8433.945521-2.68323zm-.02555-9.86408q-.357765-.10222-.971076-.17888-.587756-.10222-1.609941-.10222-1.916597 0-2.964337 1.25217-1.022185 1.25218-1.022185 3.32211 0 1.14995.281101 1.9677.306656.81775.792194 1.3544.511092.53664 1.149958.79219.66442.25555 1.354395.25555.945521 0 1.737714-.25555.792194-.2811 1.252177-.63887zM35.796854 283.07278v-19.42151l2.37658-.40887v6.79753q.664421-.25555 1.405505-.38332.766638-.15333 1.507723-.15333 1.584386 0 2.632126.45998 1.047739.43443 1.66105 1.25218.638866.79219.894412 1.9166.255547 1.1244.255547 2.47879v7.46195h-2.376581v-6.95085q0-1.22663-.178882-2.09548-.153328-.86886-.536647-1.40551-.383319-.53664-1.022185-.76664-.638866-.25554-1.584387-.25554-.383319 0-.792193.0511-.408874.0511-.792193.12777-.357765.0511-.664421.12777-.281101.0767-.408874.12778v11.03959zM52.594226 269.78438h5.034261v1.99326h-5.034261v6.13311q0 .99663.153328 1.66105.153328.63887.459983 1.02219.306656.35776.766639.51109.459983.15333 1.073294.15333 1.073294 0 1.71216-.23.66442-.25554.919966-.35776l.459984 1.96771q-.357765.17888-1.252177.43442-.894412.28111-2.04437.28111-1.354395 0-2.248807-.33221-.868857-.35777-1.405504-1.04774-.536647-.68998-.766639-1.68661-.204437-1.02218-.204437-2.35103v-11.85734l2.37658-.40887z" style="-inkscape-font-specification:'Ubuntu, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start" transform="matrix(.24745 0 0 .24823 -.35 -42.357)" /></g></symbol><symbol viewBox="0 0 201.942 201.664" id="logo-mobile"><path d="M 138.8551,128.1435 72.555104,59.743494 c -4.4,-4.5 -11.9,-5 -16.8,-1.1 -26.1,20.699997 -38.9,38.399997 -53.3999997,70.900006 -6.7,15.1 1.4,28.5 17.8999997,29.7 l 102.999996,20.4 c 6,0.4 12.3,-3.9 13.9,-9.7 l 6.5,-23.4 c 1.5,-5.8 -0.6,-14.1 -4.8,-18.4 z" fill="#61c5e8" /><path d="m 162.1551,95.643491 -14.7,-59.699997 c -1.8,-7.2 -9.2,-13.2 -16.5,-12.8 -14.1,0.9 -28,4.1 -42.999996,10.4 -6.8,2.8 -8.2,10.1 -3.5,15.7 L 143.6551,119.64349 c 4.7,5.60001 11.5,5.40001 15.1,-0.5 3.6,-5.9 5.1,-16.4 3.4,-23.499999 z" fill="#ed6f30" /><path d="m 192.0551,93.943491 8.7,-26.299997 c 3,-9.1 0.2,-22.2 -7.1,-28.5 -5,-4.3 -10.5,-8.6 -16.1,-12.3 -8,-5.3 -14.7,-0.6 -14.1,9 l 2.9,44.999997 c 0.6,9.6 5.4,20.099999 10.7,23.399999 5.3,3.4 12,-1.2 15,-10.299999 z" fill="#80bc49" /></symbol><symbol viewBox="0 0 629.155 201.664" id="logo-tablet"><g fill="#fff"><path class="st0000" d="M252 170.8c0 2.1-.5 3.6-1.6 4.3-1 .8-2.6 1.2-4.7 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.6-2.2-1.6-4.3v-6.7c-2.2 3.8-5.5 7-9.9 9.6-4.4 2.6-9.8 3.9-16.2 3.9-5.5 0-10.4-1-14.6-2.9-4.2-1.9-7.8-4.6-10.8-8-3-3.4-5.2-7.5-6.7-12.3-1.5-4.8-2.3-10-2.3-15.7 0-5.7.8-10.9 2.3-15.7 1.5-4.7 3.8-8.8 6.7-12.2 3-3.4 6.6-6 10.8-7.9 4.2-1.9 9.1-2.8 14.6-2.8 3.2 0 6.2.4 9 1.2 2.8.8 5.2 1.7 7.4 2.9 2.1 1.2 4 2.5 5.6 4 1.6 1.5 2.8 3 3.6 4.4V79.4c0-2.2.6-3.7 1.8-4.6 1.2-.8 2.8-1.2 4.9-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.7 2.3 1.7 4.6zm-59.1-31.7c0 8.4 2 15.1 5.9 20.1 4 5 9.6 7.5 17 7.5 3.8 0 7.1-.7 10-2.1 2.9-1.4 5.4-3.4 7.4-5.9 2-2.5 3.5-5.5 4.5-8.9 1-3.4 1.5-7.2 1.5-11.2 0-8.6-2.1-15.3-6.3-20.2-4.2-4.9-10-7.3-17.5-7.3-3.8 0-7 .7-9.9 2-2.8 1.4-5.2 3.3-7 5.7-1.9 2.5-3.3 5.4-4.2 8.8-1 3.6-1.4 7.4-1.4 11.5zM268.4 81.5c0-2.5.8-4.5 2.4-5.9 1.6-1.4 3.6-2.1 6-2.1 2.4 0 4.4.7 6 2.1 1.6 1.4 2.4 3.4 2.4 5.9 0 2.5-.8 4.5-2.4 5.9-1.6 1.4-3.6 2.1-6 2.1-2.4 0-4.4-.7-6-2.1-1.6-1.5-2.4-3.4-2.4-5.9zm1.9 25.8c0-2.2.6-3.7 1.7-4.6 1.1-.8 2.8-1.2 4.8-1.2 2.1 0 3.7.4 4.9 1.2 1.2.8 1.8 2.3 1.8 4.6v63.2c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6zM352.2 129.9V127c0-5.5-1.5-9.6-4.6-12.3-3.1-2.7-8.1-4.1-14.9-4.1-2.7 0-5.1.3-7 .9-2 .6-3.7 1.3-5.1 2-1.4.8-2.6 1.6-3.4 2.5-.9.9-1.6 1.6-2.3 2.3-1 1.2-1.9 1.9-2.7 2.3-.7.4-1.7.6-2.8.6-1.7 0-3.2-.5-4.6-1.4-1.4-.9-2.1-2.1-2.1-3.6 0-.8.1-1.4.2-1.9.2-.5.4-1 .7-1.6.1-.3.7-1.1 1.9-2.5 1.1-1.4 2.9-2.8 5.2-4.3 2.3-1.5 5.4-2.9 9.1-4.1 3.7-1.2 8.2-1.8 13.5-1.8 5.9 0 11 .7 15.1 2.1 4.1 1.4 7.4 3.3 9.9 5.6 2.5 2.3 4.3 5 5.5 8 1.1 3 1.7 6.2 1.7 9.5v46.2c0 3.2-2.2 4.8-6.7 4.8-3 0-4.9-.6-5.6-1.9-.7-1.3-1-3-1-5.2v-4.3c-1 1.4-2.3 2.8-3.8 4.2-1.5 1.5-3.3 2.8-5.4 4-2.1 1.2-4.7 2.2-7.7 3-3 .8-6.4 1.2-10.2 1.2-4.7 0-8.7-.5-12.1-1.6-3.4-1.1-6.2-2.5-8.4-4.4-2.2-1.9-3.9-4.1-5-6.7-1.1-2.6-1.6-5.3-1.6-8.2 0-3.8.7-7.2 2.2-10.4 1.5-3.2 4-5.9 7.5-8.2 3.5-2.3 8.3-4.1 14.2-5.4 5.9-1.3 13.3-2.1 22.3-2.2zm-8.6 9.9c-6.7.1-12.1.5-16.3 1.3-4.2.8-7.5 1.8-9.9 3.1-2.4 1.3-4 2.9-4.9 4.7-.9 1.8-1.3 3.9-1.3 6.2 0 3.3 1.2 6.1 3.7 8.5 2.4 2.4 6.5 3.6 12.1 3.6 4.9 0 9.4-1 13.4-3.1 4-2.1 7.1-4.7 9.2-7.8 1.8-2.6 2.7-6.1 2.7-10.6v-6.1zM379.6 112.9c-2.1 0-3.5-.5-4.2-1.4-.7-.9-1.1-2.2-1.1-3.8 0-1.6.4-2.9 1.1-3.8.7-.9 2.1-1.4 4.2-1.4h7V87.6c0-1.8.2-3.2.5-4.1.4-.9 1.1-1.6 2.3-2.3 1.9-1.1 3.9-1.6 6.1-1.6 2.9 0 4.4 1.4 4.4 4.2v18.7h14.7c2.1 0 3.5.5 4.2 1.4.7.9 1.1 2.2 1.1 3.8 0 1.6-.4 2.9-1.1 3.8-.7.9-2.1 1.4-4.2 1.4H400v42.9c0 4.3.7 7.2 2.1 8.7 1.4 1.5 3.8 2.3 7.1 2.3 1.3 0 2.3-.1 3.2-.4.9-.3 1.7-.6 2.4-.9.7-.3 1.4-.6 2.1-.9.7-.3 1.5-.4 2.4-.4 1.5 0 2.7.6 3.8 1.7 1.1 1.2 1.6 2.6 1.6 4.2 0 2.3-1.6 4.1-4.8 5.4-3.2 1.3-7.3 2-12.2 2-7.2 0-12.5-1.6-16-4.9-3.4-3.2-5.2-7.9-5.2-14.1v-45.7h-6.9zM500.5 137.1c0 3.5-2.1 5.2-6.4 5.2h-53.2c0 7.8 2.1 13.9 6.3 18.1 4.2 4.3 10.2 6.4 17.9 6.4 3 0 5.7-.4 7.9-1.1 2.2-.7 4.1-1.6 5.7-2.6 1.6-1 2.8-2.1 3.8-3.1 1-1.1 1.8-2 2.4-2.8.7-1 1.4-1.7 2.1-2.2.7-.5 1.7-.7 3-.7 1.5 0 2.9.4 4.3 1.3 1.4.9 2.1 2 2.1 3.5 0 1.3-.6 2.8-1.7 4.5-.9 1.4-2.2 2.8-3.7 4.4-1.5 1.6-3.4 3.1-5.8 4.6-2.3 1.5-5.2 2.7-8.5 3.6-3.3 1-7.2 1.5-11.7 1.5-5.8 0-11.1-.9-15.9-2.8-4.7-1.9-8.8-4.5-12.1-8-3.3-3.4-5.9-7.5-7.7-12.3-1.8-4.8-2.7-10-2.7-15.7 0-5.8.9-11.1 2.7-15.8 1.8-4.7 4.3-8.8 7.6-12.2 3.3-3.4 7.2-6.1 11.9-8 4.6-1.9 9.8-2.8 15.6-2.8 5.8 0 11 .9 15.5 2.8 4.5 1.9 8.2 4.5 11.3 7.8 3 3.3 5.3 7.3 6.9 11.8 1.6 4.5 2.4 9.4 2.4 14.6zm-35.9-26.5c-3.7 0-6.8.6-9.5 1.7-2.7 1.1-5 2.6-6.9 4.5-1.9 1.9-3.4 4.1-4.5 6.7-1.1 2.6-1.8 5.2-2.1 8h45.5c-.3-2.7-1-5.3-2-7.9-1-2.6-2.4-4.8-4.2-6.7-1.8-1.9-4.1-3.4-6.8-4.6-2.7-1.1-5.9-1.7-9.5-1.7zM602.4 100c8.2 0 14.8 2.1 19.6 6.2 4.8 4.1 7.2 10.4 7.2 18.9v46.1c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.9-10.2 2.6-2.7 1.7-4.8 4-6.4 6.7-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v31.5c0 3.4-2.1 5.1-6.4 5.1-4.6 0-6.9-1.7-6.9-5.1V129c0-2.7-.2-5.2-.7-7.4-.5-2.2-1.3-4.1-2.6-5.6-1.3-1.5-2.9-2.7-5.1-3.5-2.1-.8-4.9-1.2-8.2-1.2-4.1 0-7.5.8-10.2 2.5-2.7 1.7-4.8 3.9-6.4 6.6-1.6 2.7-2.7 5.8-3.4 9.1-.7 3.4-1 6.7-1 10v30.9c0 2.2-.6 3.7-1.8 4.6-1.2.8-2.8 1.2-4.9 1.2-2.1 0-3.7-.4-4.8-1.2-1.1-.8-1.7-2.3-1.7-4.6V107c0-2.1.5-3.6 1.6-4.3 1-.8 2.6-1.2 4.7-1.2 2.1 0 3.7.4 4.8 1.2 1.1.8 1.6 2.2 1.6 4.3v6.8c.1-.4.5-1.3 1.3-2.6.8-1.5 2.2-3.1 4.1-4.8 1.9-1.6 4.4-3.1 7.6-4.4 3.2-1.3 7.2-2 12-2 6.4 0 11.5 1.2 15.6 3.6 4 2.4 6.9 5.6 8.7 9.6 2.2-4 5.6-7.2 10.2-9.6 4.3-2.4 9.7-3.6 16-3.6z" transform="translate(-.045 11.43)" /></g><path d="M 138.8551,116.42979 72.555104,48.029784 c -4.4,-4.5 -11.9,-5 -16.8,-1.1 -26.1,20.7 -38.9,38.4 -53.3999997,70.900006 -6.7,15.1 1.4,28.5 17.8999997,29.7 l 102.999996,20.4 c 6,0.4 12.3,-3.9 13.9,-9.7 l 6.5,-23.4 c 1.5,-5.8 -0.6,-14.1 -4.8,-18.4 z" fill="#61c5e8" /><path d="m 162.1551,83.929784 -14.7,-59.7 c -1.8,-7.2 -9.2,-13.2 -16.5,-12.8 -14.1,0.9 -28,4.1 -42.999996,10.4 -6.8,2.8 -8.2,10.1 -3.5,15.7 L 143.6551,107.92979 c 4.7,5.6 11.5,5.4 15.1,-0.5 3.6,-5.9 5.1,-16.400005 3.4,-23.500006 z" fill="#ed6f30" /><path d="m 192.0551,82.229784 8.7,-26.3 c 3,-9.1 0.2,-22.2 -7.1,-28.5 -5,-4.3 -10.5,-8.6 -16.1,-12.3 -8,-5.2999996 -14.7,-0.6 -14.1,9 l 2.9,45 c 0.6,9.6 5.4,20.100001 10.7,23.400001 5.3,3.4 12,-1.2 15,-10.300001 z" fill="#80bc49" /></symbol></defs></svg>
      </div>*/}

      <script async src="dist/js/main.js"></script>

      {/* <script id="__bs_script__">
        //<![CDATA[
        document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.13'><\/script>".replace("HOST", location.hostname));//]]>
      </script> */}
    </div>
  );
}

export default App;
