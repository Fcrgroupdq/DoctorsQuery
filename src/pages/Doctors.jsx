import CallToActionWithVideo from "../components/doctors/bottemDoc";
import CartDoctor from "../components/doctors/cartSection";
import DoctorHeader from "../components/doctors/doctorHeader";
import DoctorSearch from "../components/doctors/doctorSearch";
import MainDoctor from "../components/doctors/mainDoctor";
import MeetOurDoctors from "../components/doctors/meetOurDDoctors";
import MemberShip from "../components/doctors/membership";

export default function DoctorsMain() {
  return (
    <div>
      <DoctorHeader />
      <MemberShip />
      <CartDoctor />
      <MeetOurDoctors />
      <div style={{ width: "90%", margin: "auto" }}>
        <CallToActionWithVideo />
      </div>
    </div>
  );
}
