import Map from "@components/ui/map";

const ContactMap = () => {
  return (
    // <Map
    //   lat={1.295831}
    //   lng={103.76261}
    //   height={"420px"}
    //   zoom={15}
    //   showInfoWindow={true}
    // />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.871303491198!2d77.1795265!3d28.6756491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03cd035888b9%3A0x5dca567f9bead6bd!2sICPA%20Global%20Consultant!5e0!3m2!1sen!2sru!4v1694007853479!5m2!1sen!2sru"
      style={{ border: 0, width: "100%", height: "420px" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default ContactMap;
