import WithParallaxWrapper from "../../hocs/WithParallaxWrapper";
import { InView } from "react-intersection-observer";

import { Cover } from "../Cover";
import { Footer } from "../Footer";

import ContactImg from "../../assets/contact.webp";
import useAppContext from "../../context/useContext";

export const Contact = ({ offset, id }) => {
  const { setActiveCard, contentRefs } = useAppContext();

  return (
    <InView
      threshold={0.25}
      onChange={(inView) => inView && setActiveCard(offset)}
      ref={contentRefs[id]}
    >
      {({ inView, ref }) => {
        return (
          <Cover image={ContactImg.src} className="contact__cover">
            <section className="contact" ref={ref} id={id}>
              <h2 className="contact__header">Thank you</h2>
            </section>
            <Footer />
          </Cover>
        );
      }}
    </InView>
  );
};

const WithContactWrapped = WithParallaxWrapper(Contact);

export default WithContactWrapped;
