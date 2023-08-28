
import banner from "../../assets/dqi-1.png";
import Carouse from "./Carousel";
import findDo from "../../assets/find do.webp";
import surg from "../../assets/dweb_surgeries.webp";
import test from "../../assets/dweb_lab_tests.png";
import medi from "../../assets/dweb_medicines.webp";

import FeatureDiv from "./Feature";
import DoctorCatDiv from "./DoctorCatDive";
import ClientSpeak from "./ClientSpeak";
import GetStarted from "./GetStarted";



export default function HomeMain() {
  return (
    <main>
      <div style={{ marginTop: "20px" }}>
        {" "}
        <Carouse />
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 m-9">
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={findDo} />
          <h3 className={roboto.className}>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={surg} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={surg} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={medi} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Image margin="auto" height={250} src={test} />
          <h3>Instant Consoulting</h3>
          <p>Connect with Your nearest Doctor</p>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="m-8"
      >
        <div>
          <h1 style={{ fontSize: "24px" }} className="m-4">
            Consult top doctors online for any health concern
          </h1>
          <p style={{ marginLeft: "1rem" }}>
            Private consultations with verified doctors in all specialists
          </p>
        </div>
        <button
          style={{ padding: "6px", height: "35px", border: "1px solid red" }}
        >
          View all Doctors
        </button>
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <FeatureDiv />
      </div>
      <div style={{margin:"20px"}}>
         <DoctorCatDiv />
      </div>

      <div style={{margin:"20px"}}>
         <ClientSpeak />
      </div>

      <div style={{margin:"20px"}}>
         <GetStarted />
      </div>
    </main>
  );
}
