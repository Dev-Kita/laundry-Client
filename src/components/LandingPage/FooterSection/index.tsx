import Container from '@/components/Container';

const FooterSection = () => {
  return (
    <>
      <Container className="text-white bg-blueMain">
        <section className="py-16 lg:px-20">
          <h2 className="text-4xl font-bold">Laundry Kita</h2>
          <div className="mt-10 mb-6">Pendaftaran Mitra</div>
          <address>
            <h5 className="font-bold">Devkita</h5>
            <p>
              Jl. Kita No. 14, Pandan Wangi, <br />
              Kec. Diwek, Kab. Jombang Jawa Timur 61471
            </p>
          </address>
        </section>
      </Container>
      <hr />
      <Container className="py-2 text-center text-white bg-blueMain">
        Copyright © 2021 Dev Kita. All rights reserved
      </Container>
    </>
  );
};

export default FooterSection;
