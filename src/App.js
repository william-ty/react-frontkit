import './scss/main.scss';
import * as Svgs from './img/sprites/index';

function App() {
return (
<div className="page page--styleguide has-sticky-header">

<div className="site-wrapper" aria-hidden="false">

{/* SITE HEADER */}

<header className="site-header">

{/* PRE-HEADER */}

{/* 
<section className="section section--pre-header">
<div className="container">
<div>This is the pre-header section</div>
</div>
</section> */}

{/* HEADER */}

<section className="section section--header">
<div className="container">

<nav className="navbar" role="navigation">

{/* LOGO */}

<div className="navbar-header">
<a className="navbar-logo" href="/" rel="home">
<Svgs.LogoMobile className="logo logo--mobile" />
<Svgs.LogoTablet className="logo logo--tablet" />
<Svgs.LogoDesktop className="logo logo--desktop" />
</a>
</div>

{/* MAIN MENU */}

<div className="navbar-body">
<nav className="navbar-menu navbar-menu--desktop">
<ul className="menu">

{/* Mobile menu close button */}
<li className="menu-item menu-item--panel-menu-close">
<button className="menu-item-link btn btn-white btn-round btn-bg-grow"
data-toggle="body" data-toggle-classname="has-panel-menu"
>
<span className="sr-only">Close menu</span>
<span>MENU</span>
&nbsp;
<Svgs.IconClose />
</button>
</li>

<li className="menu-item">
<a href="#colors" className="menu-item-link">
<span>Colors</span>
</a>
</li>

<li className="menu-item">
<a href="#type" className="menu-item-link">
<span>Typography</span>
</a>
</li>

<li className="menu-item">
<a href="#forms" className="menu-item-link">
<span>Forms</span>
</a>
</li>

<li className="menu-item">
<a href="#icons" className="menu-item-link">
<span>Icons</span>
</a>
</li>

<li className="menu-item">
<a href="#buttons" className="menu-item-link">
<span>Buttons</span>
</a>
</li>

{/* <li className="menu-item menu-item--dropdown">
<a href="window.location.href" className="menu-item-link">
<span>Item</span>
</a>
<span className="menu-item-link dropdown-toggle" data-dropdown>
<span className="caret"></span>
</span>
<div className="dropdown-wrapper">
<ul className="dropdown-menu">
<li className="menu-item">
<a href="window.location.href" className="menu-item-link">
<span>Sub-item</span>
</a>
</li>
<li className="menu-item">
<a href="window.location.href" className="menu-item-link">
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

<div className="navbar-footer">
<nav className="navbar-menu navbar-menu--mobile">
<ul className="menu">

<li className="menu-item">
<button className="menu-item-link btn btn-white btn-round btn-bg-grow">
<span className="sr-only">My cart</span>
<Svgs.IconCart className="icon" />
{/* <span className="icon-label">13</span> */}
</button>
</li>

{/* Mobile menu open button */}
<li className="menu-item menu-item--panel-menu-open">
<button className="menu-item-link btn btn-white btn-round btn-bg-grow"
data-toggle="body" data-toggle-classname="has-panel-menu"
>
<span>MENU</span>
&nbsp;
<Svgs.IconMenu className="icon" />
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

{/* <section className="section section--post-header">
<div className="container">
<div>This is the post-header section</div>
</div>
</section> */}

</header>

{/* SITE BODY */}

<main className="site-body">

<section className="section section--styleguide">
<div className="container">

<h1>Diatem Front-end Skeleton - Styleguide</h1>
<blockquote>
<p>If you start me up, I'll never stop.</p>
<cite>– Mick Jagger</cite>
</blockquote>

</div>
</section>
<section className="section section--todo">
<div className="container">
<h2>Todos</h2>
<div style={{ backgroundColor: "#dc3545", borderRadius: "1rem", padding: "1rem" }}>
<ul style={{ margin: "0" }}>
<li>favicons</li>
<li>JS Tools</li>
<li>xlinkHref SVGs</li>
</ul>
</div>
</div>
</section>
{/* COLORS */}

<section className="section section--styleguide" id="colors">
<div className="container">

<h2>Colors</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_colors.scss</code></em></p>

<h3 className="styleguide-h3">Primary colors</h3>
<div className="styleguide-color-blocks">
<div className="styleguide-color-block bg-primary-lightest">
<div className="styleguide-color-block__label">$color-primary-lightest</div>
</div>
<div className="styleguide-color-block bg-primary-lighter">
<div className="styleguide-color-block__label">$color-primary-lighter</div>
</div>
<div className="styleguide-color-block bg-primary-light">
<div className="styleguide-color-block__label">$color-primary-light</div>
</div>
<div className="styleguide-color-block bg-primary-lighty">
<div className="styleguide-color-block__label">$color-primary-lighty</div>
</div>
<div className="styleguide-color-block bg-primary">
<div className="styleguide-color-block__label">$color-primary</div>
</div>
<div className="styleguide-color-block bg-primary-darky">
<div className="styleguide-color-block__label">$color-primary-darky</div>
</div>
<div className="styleguide-color-block bg-primary-dark">
<div className="styleguide-color-block__label">$color-primary-dark</div>
</div>
<div className="styleguide-color-block bg-primary-darker">
<div className="styleguide-color-block__label">$color-primary-darker</div>
</div>
<div className="styleguide-color-block bg-primary-darkest">
<div className="styleguide-color-block__label">$color-primary-darkest</div>
</div>
</div>
<h3 className="styleguide-h3">Secondary colors</h3>
<div className="styleguide-color-blocks">
<div className="styleguide-color-block bg-secondary-lightest">
<div className="styleguide-color-block__label">$color-secondary-lightest</div>
</div>
<div className="styleguide-color-block bg-secondary-lighter">
<div className="styleguide-color-block__label">$color-secondary-lighter</div>
</div>
<div className="styleguide-color-block bg-secondary-light">
<div className="styleguide-color-block__label">$color-secondary-light</div>
</div>
<div className="styleguide-color-block bg-secondary-lighty">
<div className="styleguide-color-block__label">$color-secondary-lighty</div>
</div>
<div className="styleguide-color-block bg-secondary">
<div className="styleguide-color-block__label">$color-secondary</div>
</div>
<div className="styleguide-color-block bg-secondary-darky">
<div className="styleguide-color-block__label">$color-secondary-darky</div>
</div>
<div className="styleguide-color-block bg-secondary-dark">
<div className="styleguide-color-block__label">$color-secondary-dark</div>
</div>
<div className="styleguide-color-block bg-secondary-darker">
<div className="styleguide-color-block__label">$color-secondary-darker</div>
</div>
<div className="styleguide-color-block bg-secondary-darkest">
<div className="styleguide-color-block__label">$color-secondary-darkest</div>
</div>
</div>
<h3 className="styleguide-h3">Accent colors</h3>
<div className="styleguide-color-blocks">
<div className="styleguide-color-block bg-accent-lightest">
<div className="styleguide-color-block__label">$color-accent-lightest</div>
</div>
<div className="styleguide-color-block bg-accent-lighter">
<div className="styleguide-color-block__label">$color-accent-lighter</div>
</div>
<div className="styleguide-color-block bg-accent-light">
<div className="styleguide-color-block__label">$color-accent-light</div>
</div>
<div className="styleguide-color-block bg-accent-lighty">
<div className="styleguide-color-block__label">$color-accent-lighty</div>
</div>
<div className="styleguide-color-block bg-accent">
<div className="styleguide-color-block__label">$color-accent</div>
</div>
<div className="styleguide-color-block bg-accent-darky">
<div className="styleguide-color-block__label">$color-accent-darky</div>
</div>
<div className="styleguide-color-block bg-accent-dark">
<div className="styleguide-color-block__label">$color-accent-dark</div>
</div>
<div className="styleguide-color-block bg-accent-darker">
<div className="styleguide-color-block__label">$color-accent-darker</div>
</div>
<div className="styleguide-color-block bg-accent-darkest">
<div className="styleguide-color-block__label">$color-accent-darkest</div>
</div>
</div>
<h3 className="styleguide-h3">Gray colors</h3>
<div className="styleguide-color-blocks">
<div className="styleguide-color-block bg-gray-lightest">
<div className="styleguide-color-block__label">$color-gray-lightest</div>
</div>
<div className="styleguide-color-block bg-gray-lighter">
<div className="styleguide-color-block__label">$color-gray-lighter</div>
</div>
<div className="styleguide-color-block bg-gray-light">
<div className="styleguide-color-block__label">$color-gray-light</div>
</div>
<div className="styleguide-color-block bg-gray-lighty">
<div className="styleguide-color-block__label">$color-gray-lighty</div>
</div>
<div className="styleguide-color-block bg-gray">
<div className="styleguide-color-block__label">$color-gray</div>
</div>
<div className="styleguide-color-block bg-gray-darky">
<div className="styleguide-color-block__label">$color-gray-darky</div>
</div>
<div className="styleguide-color-block bg-gray-dark">
<div className="styleguide-color-block__label">$color-gray-dark</div>
</div>
<div className="styleguide-color-block bg-gray-darker">
<div className="styleguide-color-block__label">$color-gray-darker</div>
</div>
<div className="styleguide-color-block bg-gray-darkest">
<div className="styleguide-color-block__label">$color-gray-darkest</div>
</div>
</div>
<h3 className="styleguide-h3">Universal colors</h3>
<div className="styleguide-color-blocks">
<div className="styleguide-color-block bg-error">
<div className="styleguide-color-block__label">$color-error</div>
</div>
<div className="styleguide-color-block bg-warning">
<div className="styleguide-color-block__label">$color-warning</div>
</div>
<div className="styleguide-color-block bg-info">
<div className="styleguide-color-block__label">$color-info</div>
</div>
<div className="styleguide-color-block bg-success">
<div className="styleguide-color-block__label">$color-success</div>
</div>
</div>

</div>
</section>

{/* TYPOGRAPHY */}

<section className="section section--styleguide" id="type">
<div className="container">

<h2>Typography</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_type.scss</code></em></p>

<h3 className="styleguide-h3">Headings</h3>

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

<h3 className="styleguide-h3">Body text</h3>

<h4>Biggest p</h4>

<p className="font-size-biggest">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
eaque tempora voluptas, voluptatem animi commodi.
</p>

<h4>Bigger p</h4>

<p className="font-size-bigger">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus! Aliquid
eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate.
</p>

<h4>Big p</h4>

<p className="font-size-big">
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

<p className="font-size-small">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus! Aliquid
eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate. Magni at,
provident culpa minima ex porro ipsum ut dignissimos nam commodi quis qui dolorum saepe perferendis
beatae alias facere assumenda voluptatem eum suscipit architecto! Ea.
</p>

<h4>Smaller p</h4>

<p className="font-size-smaller">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a natus ex dolores, itaque
voluptas quo! Nesciunt, aspernatur. A provident error, molestias dolore quos facilis, doloribus
eaque tempora voluptas, voluptatem animi commodi libero dicta qui enim laborum accusamus! Aliquid
eligendi, fugit optio dolorum nesciunt ut exercitationem molestias praesentium voluptate. Magni at,
provident culpa minima ex porro ipsum ut dignissimos nam commodi quis qui dolorum saepe perferendis
beatae alias facere assumenda voluptatem eum suscipit architecto! Ea.
</p>

<h3 className="styleguide-h3">Links</h3>

<p><a href="window.location.href">This is a link</a></p>

<p>Lorem ipsum dolor sit amet consectetur <a href="window.location.href">inline link</a>. Veniam placeat consectetur
eius, natus animi itaque rerum, adoloremque magnam totam, <a href="window.location.href">adipisci corrupti quaerat</a>.
Animi libero harum repudiandae maxime nihil reprehenderit. Beatae?</p>

<p><a href="window.location.href" className="btn btn-default">Link as a button</a></p>

<h3 className="styleguide-h3">Lists</h3>

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

<h3 className="styleguide-h3">Horizontal rule</h3>

<hr />

<h3 className="styleguide-h3">Quotes</h3>

<blockquote>
<p>I do not fear computers. I fear the lack of them.</p>
<cite>– Isaac Asimov</cite>
</blockquote>

<blockquote>
<p>But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want
goodness. I want sin.</p>
<cite>– Aldous Huxley, Brave New World</cite>
</blockquote>

<h3 className="styleguide-h3">Code</h3>

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

<section className="section section--styleguide" id="forms">
<div className="container">

<h2 id="forms">Forms</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_forms.scss</code></em></p>

<div className="row">
<div className="col">
<h3 className="styleguide-h3">Inline forms</h3>

<h4>Inline forms with block inputs</h4>
<div className="form form--inline form--inline-sm margin-bottom">
<div className="input-block flex-grow">
<label htmlFor="text01">Text input</label>
<div className="input">
<input type="text" id="text01" placeholder="This one has flex grow" />
</div>
</div>
<div className="input-block">
<label htmlFor="area01">Select</label>
<div className="input">
<select name="" id="">
<option value="">One</option>
<option value="">Very very long two</option>
<option value="">Three</option>
</select>
</div>
</div>
<div className="input-block">
<div className="label">Checkbox</div>
<div className="input input--inline">
<div className="checkbox">
<input type="checkbox" id="radio10" name="radio01x" checked="checked" />
<label htmlFor="radio10"><span>Yes I do</span></label>
</div>
</div>
</div>
<div className="input-block">
<label htmlFor="date">Date input</label>
<div className="input">
<input type="date" id="date01" />
</div>
</div>
<button className="btn btn-primary flex-push-right" type="submit">Go!</button>
</div>

<h4>Inline forms with inline inputs</h4>
<div className="form form--inline form--inline-xs margin-bottom">
<div className="input-block input-block--inline">
<label htmlFor="text01">Email</label>
<div className="input input--inline">
<input type="email" id="" placeholder="Ex: john.doe@gmail.com" />
<button className="input-after btn btn-secondary">
<Svgs.IconArrowRight className="icon" />
</button>
</div>
</div>
{/* <div className="input-block input-block--inline">
<label htmlFor="text01">Password</label>
<div className="input">
<input type="password" id="" placeholder="8 numbers" />
</div>
</div> */}
<div className="input-block input-block--inline">
<div className="label">Checkbox</div>
<div className="input input--inline">
<div className="checkbox">
<input type="checkbox" id="radio10" name="radio01x" checked="checked" />
<label htmlFor="radio10"><span>Yes I do</span></label>
</div>
</div>
</div>
<button className="btn btn-default btn-round btn-bg-grow flex-push-right" type="reset">
<Svgs.IconClose className="icon" />
<span className="sr-only">Reset</span>
</button>
<button className="btn btn-default btn-round btn-bg-grow" type="reset">
<Svgs.IconMenu className="icon" />
<span className="sr-only">Menu</span>
</button>
<button className="btn btn-accent btn-round" type="submit">
<span>Login</span>
&nbsp;
<Svgs.IconArrowRight className="icon" />
</button>
</div>
</div>
<div>
<h3 className="styleguide-h3">Block forms</h3>
</div>
<div className="col-md-6">
<section className="form row">
<h4>Block forms with block inputs</h4>
<div className="input-block col-md-6 input-block--required">
<label htmlFor="text011">Text input</label>
<div className="input">
<input type="text" id="text011" placeholder="Placeholder text" />
</div>
<div className="input-text input-text--info">Info text</div>
</div>
<div className="input-block col-md-6 input-block--required">
<label htmlFor="text02">Text input with a very very long label</label>
<div className="input input--inline">
<div className="input-before">
<span>Before</span>
</div>
<input type="text" id="text02" placeholder="Placeholder text" />
</div>
</div>
<div className="input-block col-md-6">
<label htmlFor="number01">Number input</label>
<div className="input">
<input type="number" id="number01" value="9" />
</div>
<div className="input-text input-text--info">This is the input info text</div>
</div>
<div className="input-block col-md-6">
<label htmlFor="number02">Number input with unit</label>
<div className="input input--inline">
<input type="number" id="number02" value="0" />
<div className="input-after">€</div>
</div>
</div>
<div className="input-block col-md-6 input-block--required input-block--disabled">
<label htmlFor="text012">Disabled text input</label>
<div className="input">
<input type="text" id="text012" placeholder="Placeholder text" disabled />
</div>
</div>
<div className="input-block col-md-6 input-block--disabled">
<label htmlFor="number01">Disabled Number input</label>
<div className="input">
<input type="number" id="number01" value="9" disabled />
</div>
<div className="input-text input-text--info">This is the input info text</div>
</div>
{/* other inputs */}
<div className="input-block">
<label htmlFor="area01">Select</label>
<div className="input">
<select name="" id="">
<option value="">One</option>
<option value="">Very very long two</option>
<option value="">Three</option>
</select>
</div>
</div>
<div className="input-block">
<label htmlFor="area01">Textarea</label>
<div className="input">
<textarea name="" id="area01" cols="30" rows="10"
placeholder="Placeholder text"></textarea>
</div>
<div className="input-text input-text--info">200 characters maximum</div>
</div>
{/* radio and checkbox */}
<div className="input-block col-md-6">
<div className="label">Radio</div>
<div className="input">
<div className="radio">
<input type="radio" id="radio10" name="radio01x" checked="checked" />
<label htmlFor="radio10">Yes I do</label>
</div>
<div className="radio">
<input type="radio" id="radio11" name="radio01x" />
<label htmlFor="radio11">No way</label>
</div>
</div>
</div>
<div className="input-block col-md-6">
<div className="label">Checkbox</div>
<div className="input">
<div className="checkbox">
<input type="checkbox" id="check010" checked="checked" />
<label htmlFor="check010">Very very long checkbox label Lorem ipsum dolor sit amet
consectetur adipisicing elit.</label>
</div>
</div>
<div className="input-text input-text--info">
This is a very long input info text Lorem ipsum dolor sit amet consectetur
adipisicing elit. Eligendi, rem.
</div>
</div>
<div className="input-block input-block--required">
<div className="label">Inline radio</div>
<div className="input input--inline">
<div className="radio">
<input type="radio" id="radio019" name="radios9" />
<label htmlFor="radio019">Label radio</label>
</div>
<div className="radio">
<input type="radio" id="radio029" name="radios9" />
<label htmlFor="radio029">Very long label radio</label>
</div>
<div className="radio">
<input type="radio" id="radio039" name="radios9" />
<label htmlFor="radio039">Label radio</label>
</div>
</div>
</div>
<div className="input-block">
<div className="label">Inline checkbox</div>
<div className="input input--inline">
<div className="checkbox">
<input type="checkbox" id="check10" />
<label htmlFor="check10">Label one</label>
</div>
<div className="checkbox">
<input type="checkbox" id="check11" />
<label htmlFor="check11">Second label</label>
</div>
<div className="checkbox">
<input type="checkbox" id="check12" />
<label htmlFor="check12">Oh my label!</label>
</div>
</div>
</div>

<div><input type="submit" value="input[type=submit]" /></div>
<div>
<button type="submit" className="btn-lg btn-round btn-hollow btn-black btn-caret">
<i className="fa fa-star"></i>
Form submit button
</button>
</div>
</section>
</div>

<div className="col-md-6">
{/* inline input block */}
<h4>Block forms with inline inputs</h4>
<section className="form row">
<div className="input-block input-block--inline input-block--required">
<label htmlFor="text013">Inline text input</label>
<div className="input">
<input type="text" id="text013" placeholder="Placeholder text" />
</div>
</div>
<div className="input-block input-block--inline input-block--required">
<label htmlFor="text022">Inline text input with a very very long label</label>
<div className="input input--inline">
<div className="input-before">
<Svgs.IconPercent className="icon" />
</div>
<input type="text" id="text022" placeholder="Placeholder text" />
</div>
</div>
<div className="input-block input-block--inline">
<label htmlFor="number01">Inline input</label>
<div className="input">
<input type="number" id="number01" value="9" />
</div>
<div className="input-text input-text--info">This is the very long input info text, spanning on multiple lines</div>
</div>
<div className="input-block input-block--inline">
<label htmlFor="number021">Inline input with unit</label>
<div className="input input--inline">
<input type="number" id="number021" value="0" />
<div className="input-after">
<Svgs.IconMenu className="icon" />
&nbsp;
<span>Foo</span>
</div>
</div>
</div>
<div className="input-block input-block--inline">
<label htmlFor="number022">Button before</label>
<div className="input input--inline">
<button className="input-before btn btn-primary">
<span>Bar</span>
&nbsp;
<Svgs.IconDots className="icon" />
</button>
<input type="text" id="number022" placeholder="Some foo" />
</div>
</div>
<div className="input-block input-block--inline">
<label htmlFor="number02">Button after</label>
<div className="input input--inline">
<select name="" id="">
<option value="">One</option>
<option value="">Very very long two</option>
<option value="">Three</option>
</select>
<button className="input-after btn btn-secondary">
<Svgs.IconMenu className="icon" />
</button>
</div>
</div>
<div className="input-block input-block--inline">
<label htmlFor="number023">Before and after</label>
<div className="input input--inline">
<div className="input-before">
<Svgs.IconMenu className="icon" />
</div>
<input type="text" id="number023" placeholder="Some foo" />
<div className="input-after btn btn-accent">
<span>Baz</span>
&nbsp;
<Svgs.IconArrowRight className="icon" />
</div>
</div>
</div>
{/* disabled */}
<div className="input-block input-block--inline input-block--required input-block--disabled">
<label htmlFor="text014">Disabled inline input</label>
<div className="input">
<input type="text" id="text014" placeholder="Placeholder text" disabled />
</div>
</div>
<div className="input-block input-block--inline input-block--disabled">
<label htmlFor="number01">Disabled inline input</label>
<div className="input">
<input type="number" id="number01" value="9" disabled />
</div>
<div className="input-text input-text--info">This is the input info text</div>
</div>
<div className="input-block input-block--inline input-block--disabled">
<label htmlFor="number02">Before and after</label>
<div className="input input--inline">
<div className="input-before">
<Svgs.IconMenu className="icon" />
</div>
<input type="text" id="number02" placeholder="Some foo" disabled />
<button className="input-after btn btn-accent" disabled>
<span>Baz</span>
&nbsp;
<Svgs.IconArrowRight className="icon" />
</button>
</div>
</div>
{/* other inputs */}
<div className="input-block input-block--inline">
<label htmlFor="area01">Inline multiple select</label>
<div className="input">
<select multiple>
<option value="Choice 1">Choice 1</option>
<option value="Choice 2">Choice 2</option>
<option value="Choice 3">Choice 3</option>
<option value="Choice 4">Choice 4</option>
</select>
</div>
<div className="input-text input-text--info">Hold CTRL key</div>
</div>
<div className="input-block input-block--inline">
<label htmlFor="area01">Inline textarea</label>
<div className="input">
<textarea name="" id="area01" cols="30" rows="10"
placeholder="Placeholder text"></textarea>
</div>
</div>
{/* error */}
<h3 className="styleguide-h3">Error state</h3>
<div>
<div className="alert alert--error">
<i className="fa fa-exclamation-triangle"></i>
There are some errors!
</div>
</div>
{/* fieldset */}
<fieldset>
<div className="row">
<legend>This is a fieldset legend</legend>

<div className="input-block col-md-6 input-block--required input-block--error">
<label htmlFor="text0111">Text input</label>
<div className="input">
<input type="text" id="text0111" placeholder="Placeholder text" />
</div>
<div className="input-text input-text--error">This field is required.</div>
</div>
<div className="input-block col-md-6 input-block--required input-block--success">
<label htmlFor="area011">Select</label>
<div className="input">
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
<div className="input-text input-text--success">Well done!</div>
</div>
<div className="input-block input-block--required input-block--error">
<div className="label">Inline radio</div>
<div className="input input--inline">
<div className="radio">
<input type="radio" id="radio911" name="radio111" />
<label htmlFor="radio911">Label one</label>
</div>
<div className="radio">
<input type="radio" id="radio921" name="radio111" />
<label htmlFor="radio921">Very long label radio</label>
</div>
<div className="radio">
<input type="radio" id="radio931" name="radio111" />
<label htmlFor="radio931">Another label</label>
</div>
</div>
<div className="input-text input-text--error">This field is required.</div>
</div>
</div>
</fieldset>
{/* mentions */}
<div>
<p className="font-size-small">Fields marked with a * are required.</p>
<p className="font-size-small">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur
aperiam et ullam culpa aut quod? Suscipit, alias ea? A suscipit neque, dolorem
aspernatur provident incidunt sint fugit dolorum quas!
</p>
</div>
</section>
</div>
<div className="col-xs-6 col-sm-4 col-md-3"></div>
</div>

</div>
</section>

{/* ICONS */}

<section className="section section--styleguide" id="icons">
<div className="container">

<h2>Icons</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/components/_icons.scss</code></em></p>

<h3 className="styleguide-h3">Icon set</h3>

<div className="styleguide-icons styleguide-icons--icon-set">
<div>
<Svgs.IconArrowLeft className="icon" />
<span>arrow-left</span>
</div>
<div>
<Svgs.IconArrowRight className="icon" />
<span>arrow-right</span>
</div>
<div>
<Svgs.IconClose className="icon" />
<span>close</span>
</div>
<div>
<Svgs.IconDots className="icon" />
<span>dots</span>
</div>
<div>
<Svgs.IconMenu className="icon" />
<span>menu</span>
</div>
<div>
        <Svgs.IconPercent className="icon" />
<span>percent</span>
</div>
<div>
        <Svgs.IconCart className="icon" />
<span>cart</span>
</div>
</div>

<h3 className="styleguide-h3">Icon sizing</h3>

<h4>Size: extra-extra-large (32px)</h4>

<div className="styleguide-icons styleguide-icons--dark">
<div>
<Svgs.IconCart className="icon icon-xxl" />
</div>
<div>
<Svgs.IconArrowRight className="icon icon-xxl" />
</div>
<div>
<Svgs.IconClose className="icon icon-xxl" />
</div>
<div>
<Svgs.IconDots className="icon icon-xxl" />
</div>
<div>
<Svgs.IconMenu className="icon icon-xxl" />
</div>
<div>
<svg className="icon icon-xxl" viewBox="0 0 24 24">
<use xlinkHref="#icon-percent"></use>
</svg>
</div>
</div>

<h4>Size: extra-large (24px)</h4>

<div className="styleguide-icons styleguide-icons--dark">
<div>
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-left"></use>
</svg>
</div>
<div>
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-right"></use>
</svg>
</div>
<div>
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</div>
<div>
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-dots"></use>
</svg>
</div>
<div>
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</div>
<div>
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-percent"></use>
</svg>
</div>
</div>

<h4>Size: large (20px)</h4>

<div className="styleguide-icons styleguide-icons--dark">
<div>
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-left"></use>
</svg>
</div>
<div>
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-right"></use>
</svg>
</div>
<div>
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</div>
<div>
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-dots"></use>
</svg>
</div>
<div>
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</div>
<div>
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-percent"></use>
</svg>
</div>
</div>

<h4>Size: default (16px)</h4>

<div className="styleguide-icons styleguide-icons--dark">
<div>
<Svgs.IconArrowLeft className="icon" />
</div>
<div>
<Svgs.IconArrowRight className="icon" />
</div>
<div>
<Svgs.IconClose className="icon" />
</div>
<div>
<Svgs.IconDots className="icon" />
</div>
<div>
<Svgs.IconMenu className="icon" />
</div>
<div>
<svg className="icon" viewBox="0 0 24 24" width="36" height="36">
<use xlinkHref="#icon-percent"></use>
</svg>
</div>
<p>This one has HTML <code>width="36" height="36"</code> attributes override</p>
</div>

<h4>Size: small (14px)</h4>

<div className="styleguide-icons styleguide-icons--dark">
<div>
<svg className="icon icon-sm" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-left"></use>
</svg>
</div>
<div>
<svg className="icon icon-sm" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-right"></use>
</svg>
</div>
<div>
<svg className="icon icon-sm" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</div>
<div>
<svg className="icon icon-sm" viewBox="0 0 24 24">
<use xlinkHref="#icon-dots"></use>
</svg>
</div>
<div>
<svg className="icon icon-sm" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</div>
<div>
<svg className="icon icon-sm" viewBox="0 0 24 24">
<use xlinkHref="#icon-percent"></use>
</svg>
</div>
</div>

<h4>Size: extra-small (12px)</h4>

<div className="styleguide-icons styleguide-icons--dark">
<div>
<svg className="icon icon-xs" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-left"></use>
</svg>
</div>
<div>
<svg className="icon icon-xs" viewBox="0 0 24 24">
<use xlinkHref="#icon-arrow-right"></use>
</svg>
</div>
<div>
<svg className="icon icon-xs" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</div>
<div>
<svg className="icon icon-xs" viewBox="0 0 24 24">
<use xlinkHref="#icon-dots"></use>
</svg>
</div>
<div>
<svg className="icon icon-xs" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</div>
<div>
<svg className="icon icon-xs" viewBox="0 0 24 24">
<use xlinkHref="#icon-percent"></use>
</svg>
</div>
</div>

<h3 className="styleguide-h3">Inline icons</h3>

<p className="font-size-biggest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="window.location.href"><svg className="icon icon--inline icon-xxl" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="window.location.href">Another inline icon&nbsp;<svg className="icon icon--inline icon-xxl" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

<p className="font-size-bigger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="window.location.href"><svg className="icon icon--inline icon-xl" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="window.location.href">Another inline icon&nbsp;<svg className="icon icon--inline icon-xl" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

<p className="font-size-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="window.location.href"><svg className="icon icon--inline icon-lg" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="window.location.href">Another inline icon&nbsp;<svg className="icon icon--inline icon-lg" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="window.location.href"><svg className="icon icon--inline" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;ICONIC</a> inventore magni reiciendis voluptatum <a href="window.location.href">Another inline icon&nbsp;<svg className="icon icon--inline" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

<p className="font-size-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="window.location.href"><svg className="icon icon--inline icon-sm" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="window.location.href">Another inline icon&nbsp;<svg className="icon icon--inline icon-sm" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

<p className="font-size-smaller">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus pariatur incidunt labore est obcaecati dolores, temporibus <a href="window.location.href"><svg className="icon icon--inline icon-xs" viewBox="0 0 24 24"><use xlinkHref="#icon-menu"></use></svg>&nbsp;An inline icon</a> inventore magni reiciendis voluptatum <a href="window.location.href">Another inline icon&nbsp;<svg className="icon icon--inline icon-xs" viewBox="0 0 24 24"><use xlinkHref="#icon-percent"></use></svg></a> et nisi dicta ex autem! Accusamus ducimus iusto nobis.</p>

</div>
</section>

{/* BUTTONS */}

<section className="section section--styleguide" id="buttons">
<div className="container">

<h2>Buttons</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_buttons.scss</code></em></p>

<div className="row styleguide-buttons">
<div className="col-xs-6 col-sm-4 col-md-3">
<h3 className="styleguide-h3">Colors</h3>
<button className="btn">.btn</button>
<button className="btn btn-default">.btn-default</button>
<button className="btn btn-black">.btn-black</button>
<button className="btn btn-gray">.btn-gray</button>
<button className="btn btn-white">.btn-white</button>
<button className="btn btn-primary">.btn-primary</button>
<button className="btn btn-secondary">.btn-secondary</button>
<button className="btn btn-accent">.btn-accent</button>
</div>
<div className="col-xs-6 col-sm-4 col-md-3">
<h3 className="styleguide-h3">Rounded</h3>
<button className="btn btn-round">.btn-round</button>
<button className="btn btn-default btn-round">.btn-round</button>
<button className="btn btn-black btn-round">.btn-round</button>
<button className="btn btn-gray btn-round">.btn-round</button>
<button className="btn btn-white btn-round">.btn-round</button>
<button className="btn btn-primary btn-round">.btn-round</button>
<button className="btn btn-secondary btn-round">.btn-round</button>
<button className="btn btn-accent btn-round">.btn-round</button>
</div>
<div className="col-xs-6 col-sm-4 col-md-3">
<h3 className="styleguide-h3">Hollow</h3>
<button className="btn btn-hollow">.btn-hollow</button>
<div style={{ background: "black", padding: "0.75rem", marginBottom: "1.5rem" }}>
<button className="btn btn-default btn-hollow">.btn-hollow</button>
</div>
<button className="btn btn-black btn-hollow">.btn-hollow</button>
<button className="btn btn-gray btn-hollow">.btn-hollow</button>
<div style={{ background: "black", padding: "0.75rem", marginBottom: "1.5rem" }}>
<button className="btn btn-white btn-hollow">.btn-hollow</button>
</div>
<button className="btn btn-primary btn-hollow">.btn-hollow</button>
<button className="btn btn-secondary btn-hollow">.btn-hollow</button>
<button className="btn btn-accent btn-hollow">.btn-hollow</button>
</div>
<div className="col-xs-6 col-sm-4 col-md-3">
<h3 className="styleguide-h3">Rounded hollow</h3>
<button className="btn btn-round btn-hollow">.btn-hollow</button>
<div style={{ background: "black", padding: "0.75rem", marginBottom: "1.5rem" }}>
<button className="btn btn-default btn-round btn-hollow">
.btn-hollow
</button>
</div>
<button className="btn btn-black btn-round btn-hollow">
.btn-hollow
</button>
<button className="btn btn-gray btn-round btn-hollow">.btn-hollow</button>
<div style={{ background: "black", padding: "0.75rem", marginBottom: "1.5rem" }}>
<button className="btn btn-white btn-round btn-hollow">
.btn-hollow
</button>
</div>
<button className="btn btn-primary btn-round btn-hollow">
.btn-hollow
</button>
<button className="btn btn-secondary btn-round btn-hollow">
.btn-hollow
</button>
<button className="btn btn-accent btn-round btn-hollow">
.btn-hollow
</button>
</div>
<div className="col-xs-6 col-sm-4 col-md-3">
<h3 className="styleguide-h3">Sizes</h3>
<button className="btn btn-primary btn-xs">.btn-xs</button>
<button className="btn btn-primary btn-sm">.btn-sm</button>
<button className="btn btn-primary">.btn</button>
<a href="window.location.href" className="btn btn-primary btn-lg">.btn-lg</a>
<button className="btn btn-primary btn-xl">.btn-xl</button>

<h3 className="styleguide-h3">Layout</h3>
<button className="btn btn-primary btn-block">.btn-block</button>
<button className="btn btn-secondary btn-wrap">
.btn-wrap very very long button multi-line content
</button>
<button className="btn btn-black btn-wrap btn-round">
.btn-wrap rounded very very long button multi-line content
</button>
</div>
<div className="col-xs-6 col-sm-4 col-md-3">
<h3 className="styleguide-h3">Background grow</h3>
<button className="btn btn-bg-grow">.bg-grow</button>
<button className="btn btn-bg-grow">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>
<button className="btn btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</button>
<button className="btn btn-default btn-bg-grow btn-round">.bg-grow default</button>
<button className="btn btn-default btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</button>
{/* <div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
</div> */}
<button className="btn btn-black btn-bg-grow">.bg-grow black</button>
<button className="btn btn-black btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>
<button className="btn btn-gray btn-bg-grow">.bg-grow gray</button>
<button className="btn btn-gray btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>
<button className="btn btn-white btn-bg-grow">.bg-grow white</button>
<button className="btn btn-white btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>
<button className="btn btn-primary btn-bg-grow">.bg-grow primary</button>
<button className="btn btn-primary btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>
<button className="btn btn-secondary btn-bg-grow btn-round">.bg-grow secondary</button>
<button className="btn btn-secondary btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>
<button className="btn btn-accent btn-bg-grow">.bg-grow accent</button>
<button className="btn btn-accent btn-bg-grow btn-round">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>

<h3 className="styleguide-h3">Disabled</h3>
<button className="btn" disabled="disabled">disabled</button>
<button className="btn btn-default" disabled="disabled">disabled</button>
<button className="btn btn-black" disabled="disabled">disabled</button>
<button className="btn btn-gray" disabled="disabled">disabled</button>
<button className="btn btn-white" disabled="disabled">disabled</button>
<button className="btn btn-primary btn-round" disabled="disabled">
disabled
</button>
<button className="btn btn-secondary btn-hollow" disabled="disabled">
disabled
</button>
<button className="btn btn-accent" disabled="disabled">disabled</button>
</div>
{/* <div className="col-xs-6 col-sm-4 col-md-3">
</div> */}
<div className="col-xs-12 col-md-6">
<h3 className="styleguide-h3">Icons</h3>
<button className="btn">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
&nbsp;
MENU</button>
<button className="btn btn-default">
.btn-default
&nbsp;
        <Svgs.IconPercent className="icon" />
</button>
<button className="btn btn-black btn-block btn-round">
<Svgs.IconDots className="icon" />

&nbsp;
.btn-black
</button>
<button className="btn btn-secondary btn-sm btn-wrap">
.btn-wrap very very long button multi-line content
&nbsp;
<Svgs.IconMenu className="icon icon-xxl" />

</button>
<button className="btn btn-gray btn-lg">
.btn-gray
&nbsp;
<Svgs.IconPercent className="icon icon-lg" />

</button>
<button className="btn btn-primary btn-xs">
<Svgs.IconPercent className="icon icon-xs" />
</button>
<button className="btn btn-white">
<Svgs.IconArrowLeft className="icon" />&nbsp;
.btn-white
</button>
<button className="btn btn-primary btn-round btn-hollow">
.btn-primary
&nbsp;
<Svgs.IconArrowRight className="icon" />
</button>
<br />
<button className="btn btn-secondary btn-xs">
.btn-xs&nbsp;
<Svgs.IconArrowRight className="icon icon-xs" />
</button>
<button className="btn btn-accent btn-xs">
<Svgs.IconArrowLeft className="icon icon-xs" />
</button>
<br />
<button className="btn btn-secondary btn-sm btn-round">
.btn-sm&nbsp;
<Svgs.IconMenu className="icon icon-sm" />&nbsp;
</button>
<button className="btn btn-accent btn-sm btn-round">
<Svgs.IconPercent className="icon icon-sm" />&nbsp;
</button>
<br />
<button className="btn btn-secondary">
.btn&nbsp;
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</button>
<button className="btn btn-accent">
<svg className="icon" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
</button>
<br />
<button className="btn btn-secondary btn-lg btn-hollow">
.btn-lg&nbsp;
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</button>
<button className="btn btn-accent btn-lg btn-hollow">
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-dots"></use>
</svg>
</button>
<br />
<button className="btn btn-secondary btn-xl">
.btn-xl&nbsp;
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-menu"></use>
</svg>
</button>
<button className="btn btn-accent btn-xl">
<svg className="icon icon-xl" viewBox="0 0 24 24">
<use xlinkHref="#icon-dots"></use>
</svg>
</button>
</div>
{/* <div className="col-xs-6 col-sm-4 col-md-3">
<h3 className="styleguide-h3">Caret</h3>
<button className="btn btn-default btn-caret">.btn-caret</button>
<button className="btn btn-primary btn-caret btn-xs">.btn-caret</button>
<button className="btn btn-black btn-caret btn-round btn-xl">
.btn-caret
</button>
<div style="background: black; padding: 0.75rem; margin-bottom: 1.5rem;">
<button className="btn btn-white btn-caret btn-hollow btn-block">
.btn-caret
</button>
</div>
<button className="btn btn-secondary btn-caret btn-wrap">
.btn-caret very very long button multi-line content
</button>
</div> */}
</div>

</div>
</section>

{/* TABS */}

<section className="section section--styleguide">
<div className="container">

<h2>Tabs</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/components/_tabs.scss</code> and <code>js/lib/tabs.js</code></em></p>

<div className="styleguide-tabs-toggles">
<button className="tab-toggle btn active" data-tabs-toggle data-tabs-group="my-tabs" data-tabs-target="#my_tab_1">Tab #1</button>
<button className="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs" data-tabs-target="#my_tab_2">Tab #2</button>
<button className="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs" data-tabs-target="#my_tab_3">Tab #3</button>
</div>

<div className="styleguide-tabs-contents">
<div className="tab-content active" id="my_tab_1" data-tabs-content data-tabs-group="my-tabs">
<h3>Tab #1</h3>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque error minus sed saepe eveniet provident officiis rerum sequi.</p>
</div>

<div className="tab-content" id="my_tab_2" data-tabs-content data-tabs-group="my-tabs">
<h3>Tab #2</h3>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, unde quod. Accusantium ratione aliquid eius veniam consequatur soluta, corrupti, obcaecati ipsa suscipit animi veritatis cumque tenetur error blanditiis aut molestiae commodi laborum! Molestiae, mollitia quas.</p>
</div>

<div className="tab-content" id="my_tab_3" data-tabs-content data-tabs-group="my-tabs">
<h3>Tab #3</h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem eligendi natus rerum cumque sed consequuntur cupiditate velit nesciunt, inventore nobis quam qui dignissimos unde veniam illo minima temporibus doloribus!</p>
</div>
</div>

<div className="styleguide-tabs-toggles">
<button className="tab-toggle btn active" data-tabs-toggle data-tabs-group="my-tabs-2" data-tabs-target="#my_tab_4">Tab #4</button>
<button className="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs-2" data-tabs-target="#my_tab_5">Tab #5</button>
<button className="tab-toggle btn" data-tabs-toggle data-tabs-group="my-tabs-2" data-tabs-target="#my_tab_6">Tab #6</button>
</div>

<div className="styleguide-tabs-contents">
<div className="tab-content active" id="my_tab_4" data-tabs-content data-tabs-group="my-tabs-2">
<h3>Tab #4</h3>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque error minus sed saepe eveniet provident officiis rerum sequi.</p>
</div>

<div className="tab-content" id="my_tab_5" data-tabs-content data-tabs-group="my-tabs-2">
<h3>Tab #5</h3>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, unde quod. Accusantium ratione aliquid eius veniam consequatur soluta, corrupti, obcaecati ipsa suscipit animi veritatis cumque tenetur error blanditiis aut molestiae commodi laborum! Molestiae, mollitia quas.</p>
</div>

<div className="tab-content" id="my_tab_6" data-tabs-content data-tabs-group="my-tabs-2">
<h3>Tab #6</h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem eligendi natus rerum cumque sed consequuntur cupiditate velit nesciunt, inventore nobis quam qui dignissimos unde veniam illo minima temporibus doloribus!</p>
</div>
</div>

</div>
</section>

{/* SHADOWS */}

<section className="section section--styleguide">
<div className="container">

<h2>Shadows</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_shadows.scss</code></em></p>

<div className="row">
<div className="col-xxs-6 col-sm-3">
<div className="styleguide-shadow-block shadow-0">.shadow-0</div>
</div>
<div className="col-xxs-6 col-sm-3">
<div className="styleguide-shadow-block shadow-1">.shadow-1</div>
</div>
<div className="col-xxs-6 col-sm-3">
<div className="styleguide-shadow-block shadow-2">.shadow-2</div>
</div>
<div className="col-xxs-6 col-sm-3">
<div className="styleguide-shadow-block shadow-3">.shadow-3</div>
</div>
<div className="col-xxs-6 col-sm-3">
<div className="styleguide-shadow-block shadow-4">.shadow-4</div>
</div>
<div className="col-xxs-6 col-sm-3">
<div className="styleguide-shadow-block shadow-5">.shadow-5</div>
</div>
</div>

</div>
</section>

{/* CAPPED WIDTH */}

<section className="section section--styleguide">
<div className="container">

<h2>Capped width</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/layout/_capped-width.scss</code></em></p>

<h3 className="styleguide-h3">.max-width-xs</h3>
<p className="max-width-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque perspiciatis perferendis, voluptate enim aut, magni optio laborum dolorem placeat voluptatibus quis quia. Debitis nihil, quod unde incidunt, impedit, assumenda a corporis rem id eligendi aspernatur error explicabo excepturi? Quas cumque, natus quaerat iste nam sunt sint cum quis perspiciatis adipisci, suscipit error ut praesentium dolorem modi exercitationem unde velit laboriosam! Velit, veniam sint? Ullam nobis provident reprehenderit, nisi earum quae neque minima, aspernatur commodi debitis omnis sed veritatis quam ipsum ipsam, quaerat repellat recusandae. Qui consequuntur necessitatibus eveniet facilis doloremque.</p>

<h3 className="styleguide-h3">.max-width-sm</h3>
<p className="max-width-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque perspiciatis perferendis, voluptate enim aut, magni optio laborum dolorem placeat voluptatibus quis quia. Debitis nihil, quod unde incidunt, impedit, assumenda a corporis rem id eligendi aspernatur error explicabo excepturi? Quas cumque, natus quaerat iste nam sunt sint cum quis perspiciatis adipisci, suscipit error ut praesentium dolorem modi exercitationem unde velit laboriosam! Velit, veniam sint? Ullam nobis provident reprehenderit, nisi earum quae neque minima, aspernatur commodi debitis omnis sed veritatis quam ipsum ipsam, quaerat repellat recusandae. Qui consequuntur necessitatibus eveniet facilis doloremque. Dolores officia quaerat consequuntur, nemo accusantium accusamus ipsum, ex, explicabo aspernatur quam odit quod aperiam magni culpa tenetur? Nihil magni magnam nobis dolorum illo quo debitis et accusamus ratione.</p>

<h3 className="styleguide-h3">.max-width-md</h3>
<p className="max-width-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque perspiciatis perferendis, voluptate enim aut, magni optio laborum dolorem placeat voluptatibus quis quia. Debitis nihil, quod unde incidunt, impedit, assumenda a corporis rem id eligendi aspernatur error explicabo excepturi? Quas cumque, natus quaerat iste nam sunt sint cum quis perspiciatis adipisci, suscipit error ut praesentium dolorem modi exercitationem unde velit laboriosam! Velit, veniam sint? Ullam nobis provident reprehenderit, nisi earum quae neque minima, aspernatur commodi debitis omnis sed veritatis quam ipsum ipsam, quaerat repellat recusandae. Qui consequuntur necessitatibus eveniet facilis doloremque. Dolores officia quaerat consequuntur, nemo accusantium accusamus ipsum, ex, explicabo aspernatur quam odit quod aperiam magni culpa tenetur? Nihil magni magnam nobis dolorum illo quo debitis et accusamus ratione.</p>

</div>
</section>

{/* FIXED RATIO */}

<section className="section section--styleguide">
<div className="container">

<h2>Fixed ratio blocks</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/layout/_fixed-ratio.scss</code></em></p>

<h3 className="styleguide-h3">Square ratio</h3>
<div className="max-width-xxs">
<div className="fixed-ratio fixed-ratio--1by1" style={{ backgroundColor: "tomato" }}>
</div>
</div>

<h3 className="styleguide-h3">16/9 ratio, responsive media embed</h3>
<div className="max-width-xs">
<div className="fixed-ratio fixed-ratio--16by9" style={{ backgroundColor: "lightseagreen" }}>
{/* <iframe src="https://www.youtube.com/embed/jbi9HEz-cww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
</div>
</div>

</div>
</section>

{/* MODAL AND OVERLAY */}

<section className="section section--styleguide">
<div className="container">

<h2>Modal and overlay</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>scss/base/_modal.scss</code> and <code>js/lib/modal.js</code></em></p>

<button className="btn btn-primary" data-toggle="modal" data-target="#modal_1">Small modal</button>

<button className="btn btn-secondary" data-toggle="modal" data-target="#modal_2">Default modal</button>

<button className="btn btn-accent" data-toggle="modal" data-target="#modal_3">Large modal</button>

</div>
</section>

{/* TOGGLE */}

<section className="section section--styleguide">
<div className="container">

<h2>Toggle helper</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>js/lib/toggle.js</code></em></p>

<p>
<button className="btn btn-default" data-toggle data-toggle-classname="btn-primary">Toggle me</button>
</p>

<p>
<button className="btn btn-secondary" data-toggle=".styleguide-toggle-target">Togglers with targets</button>
<button className="btn btn-secondary" data-toggle=".styleguide-toggle-target">Togglers with targets</button>
</p>
<div className="row">
<div className="col-xs-6">
<div className="styleguide-toggle-target margin-bottom-half">I'm the target</div>
</div>
<div className="col-xs-6">
<div className="styleguide-toggle-target">Me too</div>
</div>
</div>

</div>
</section>

{/* SCROLLER */}

<section className="section section--styleguide">
<div className="container">

<h2>Scroller helper</h2>
<p className="styleguide-p-sourcecode"><em>Source code: <code>js/lib/scroller.js</code></em></p>

<p>
<button className="btn btn-default" data-scroll="#colors">Scroll to #colors section</button>
</p>

<p>
Note: all links to local anchors like <code>&lt;a href="#foo"&gt;</code> are automatically scrollers by default.
</p>

</div>
</section>

{/* SLIDER DEMO */}

<section className="section section--styleguide">

<div className="container">
<h2>Slider demo</h2>
</div>

<div className="styleguide-tiny-slider tiny-slider">
<div className="tiny-slide">Slide 1</div>
<div className="tiny-slide">Slide 2</div>
<div className="tiny-slide">Slide 3</div>
<div className="tiny-slide">Slide 4</div>
<div className="tiny-slide">Slide 5</div>
</div>

</section>

{/* IMAGE TESTS */}

<section className="section section--styleguide">
<div className="container">

<h2>Image test</h2>
<div className="styleguide-image-test">
<img src="dist/img/static/logo-diatem.jpg" alt="Logo Diatem Test" />
</div>
<div className="styleguide-image-test">
<img src="dist/img/static/logo-diatem-flipped.png" alt="Diatem Flipped" />
</div>

<h2>Background image test</h2>
<div className="styleguide-bg-image-test styleguide-bg-image-test--1"></div>
<div className="styleguide-bg-image-test styleguide-bg-image-test--2"></div>

</div>
</section>

{/* End of styleguide content */}
</main>

{/* SITE FOOTER */}

<footer className="site-footer">

{/* PRE-FOOTER */}

{/* <section className="section section--pre-footer">
<div className="container">
<div>This is the pre-footer section</div>
</div>
</section> */}

{/* FOOTER */}

{/* <section className="section section--footer">
<div className="container">
<div>This is the footer section</div>
</div>
</section> */}

{/* POST-FOOTER */}

<section className="section section--post-footer">
<div className="container">
<div className="footer-made-by">
<em>Made with ♥ by&nbsp;</em>
<a href="https://diatem.net" rel="noreferrer" target="_blank" className="footer-made-by__link" >
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
<div className="overlay" id="overlay"></div>

{/* Small modal */}
<dialog className="modal modal-sm" id="modal_1" aria-labelledby="modal_1-title" aria-hidden="true">
<div className="modal__header">
<div className="modal__title h3" id="modal_1-title">Small Modal title</div>
<button className="modal__btn-close" data-modal="close">
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
<span className="sr-only">Close</span>
</button>
</div>
<div className="modal__body">
<p>Short confirmation message</p>
</div>
<div className="modal__footer">
<button className="modal__btn-dismiss" data-modal="close">Decline</button>
<button className="modal__btn-accept" data-modal="close" data-modal-focus>Accept</button>
</div>
</dialog>

{/* Default modal */}
<dialog className="modal" id="modal_2" aria-labelledby="modal_2-title" aria-hidden="true">
<div className="modal__header">
<div className="modal__title h3" id="modal_2-title">Default modal title</div>
<button className="modal__btn-close" data-modal="close">
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
<span className="sr-only">Close</span>
</button>
</div>
<div className="modal__body">
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
<div className="modal__footer">
<button className="modal__btn-dismiss" data-modal="close">Decline</button>
<button className="modal__btn-accept btn-secondary" data-modal="close" data-modal-focus>Accept</button>
</div>
</dialog>

{/* Large modal */}
<dialog className="modal modal-lg" id="modal_3" aria-labelledby="modal_3-title" aria-hidden="true">
<div className="modal__header">
<div className="modal__title h3" id="modal_3-title">Large modal title</div>
<button className="modal__btn-close btn btn-round btn-bg-grow" data-modal="close">
<svg className="icon icon-lg" viewBox="0 0 24 24">
<use xlinkHref="#icon-close"></use>
</svg>
<span className="sr-only">Close</span>
</button>
</div>
<div className="modal__body">
<div className="input-block">
<label htmlFor="text1000">Text input</label>
<div className="input">
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
<div className="modal__footer">
<button className="modal__btn-dismiss" data-modal="close">Decline</button>
<button className="modal__btn-accept btn-accent" data-modal="close" data-modalfocus>Accept</button>
</div>
</dialog>

{/* DEBUG ZONE */}
<div className="debug-zone">
<div className="debug-zone__item debug-zone__item--screen-width js-debug-item-screen-width">0</div>
<div className="debug-zone__item debug-zone__item--bp"></div>
</div>

{/* INLINE SVG SPRITES ! REMOVED */}

<script async src="dist/js/main.js"></script>

{/* <script id="__bs_script__">
//<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.13'><\/script>".replace("HOST", location.hostname));//]]>
</script> */}
</div>
);
}

export default App;
