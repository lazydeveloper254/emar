import Image from "next/image";
import Dashboard from "./dashboard/page";
import Appointments from "./appointments/page";
import Navbar from "./navbar/page";
import View_Appointments from "./appointments/viewAppointments/page";

export default function Home() {
  return (
      
    <div >
    
          <Navbar/>
          <Dashboard />
          <View_Appointments/>
       
      </div>
    // </div>

    
  );
}
