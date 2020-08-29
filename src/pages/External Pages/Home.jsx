import React, { Fragment } from 'react';

import ImageHome from '../../assets/img/home-cropped.jpg';
import ImageDLHK from '../../assets/img/logo-dlhk-removebg-preview.png';
import ImageBandung from '../../assets/img/logo-bandung.png';

const Home = () => {
  return (
    <Fragment>
      <Row theme={'bg-primary'}>
        <TopLevel text={'(022)-2514327'} />
        <TopLevel text={'dlhkkota@bandung.go.id'} />
      </Row>

      <Row theme={'bg-white'}>
        <Col
          col={2}
          value={
            <Image image={ImageBandung} css={{ width: 85, height: 'auto' }} />
          }
        />
        <Col col={8} value={<Nav />} />
        <Col col={2} value={<Image image={ImageDLHK} />} />
      </Row>

      <Row>
        <Col col={12} value={<Image image={ImageHome} />} />
      </Row>
    </Fragment>
  );
};

const Row = ({ children, theme }) => {
  return (
    <div className={`row ${theme}`} style={{ marginRight: 0.5 }}>
      {children}
    </div>
  );
};

const Col = ({ col, value }) => {
  return <div className={`col-md-${col} text-center mt-3`}>{value}</div>;
};

const TopLevel = ({ text }) => {
  return <div className='col-3 mt-3 mb-3 text-center text-white'>{text}</div>;
};

const Image = ({ image, css }) => {
  return <img className='img-fluid' src={image} alt='pict' style={css} />;
};

const Nav = () => {
  return (
    <ul className='nav justify-content-center'>
      <NavLink menu={'HOME'} active={'active'} />
      <NavLink menu={'PROFIL'} />
      <NavLink menu={'GALERI'} />
      <NavLink menu={'INFORMASI'} />
      <NavLink menu={'HUBUNGI KAMI'} />
    </ul>
  );
};

const NavLink = ({ menu, active }) => {
  return (
    <li className='nav-item dropdown'>
      <a
        style={{ fontWeight: 'bold' }}
        className={`nav-link ${active} text-dark mr-4`}
        href='/#'
      >
        {menu}
      </a>
    </li>
  );
};

export default Home;
