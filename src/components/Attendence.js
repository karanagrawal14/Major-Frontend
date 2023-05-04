import React from "react";
import Axios from "axios";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import { EmptyStateSmall } from "./EmptyState"
import { Download , PlayCircle, XCircle} from "react-feather";
let userType = JSON.parse(localStorage.getItem("userType"));

let localdata = JSON.parse(localStorage.getItem("userDetails"));
let user = localdata
  ? localdata
  : {
      fName: "",
      lName: "",
      email: "",
      password: "",
      _id: "404",
    };

    const generatePDF = (tickets) => {
        const doc = new jsPDF();
        const tableColumn = ["Name", "Marked"];
      
        const tableRows = [];
        if (!tickets.length) return;
      
        tickets.forEach((ticket) => {
          const ticketData = [
            ticket.student_name
              .concat(" / ")
              .concat("Present" + ""),
          ];
      
          tableRows.push(ticketData);
        });
      
        doc.autoTable(tableColumn, tableRows, { startY: 40 });
      
        doc.addFont("Helvetica", "Helvetica", "");
        doc.setFontSize(22);
        doc.setFont("Helvetica", "bold");
        doc.text("Attendance Report", 15, 20);
      
        doc.setFontSize(16);
        doc.setFont("Helvetica", "");
        doc.text(`Attendence was submitted by ${tickets.length} students`, 15, 30);
      
        doc.save(`attendence.pdf`);
      };

      const Attendence = ({ history }) => {
        const [attendenceInfo, setattendenceInfo] = React.useState(null);
        const [attendenceResponse, setAttendenceResponse] = React.useState(null);
        const [isActive, setIsActive] = React.useState(
        attendenceInfo ? attendenceInfo.is_active : false
        );
        const [attendenceResults,setAttendenceResults] = React.useState([]);
        const [hasSubmitted, setHasSubmitted] = React.useState(false);
        const forceUpdate = React.useCallback(() => setIgnore((v) => v + 1), []);
        const [ignore, setIgnore] = React.useState(0);
        React.useEffect(() => {
            let loc = window.location.href.split("/");
            let attendenceId = loc[loc.length - 1];
            Axios.get(`http://localhost:8000/api/attendence/${attendenceId}`).then((res) => {
              if (res.data.success) {
                setattendenceInfo(res.data.data);
                setIsActive(res.data.data.is_active);
              }
            });
          }, [isActive, hasSubmitted]);
        
        React.useEffect(() => {
          let loc = window.location.href.split("/");
          let attendenceId = loc[loc.length - 1];
          if (userType === "student") {
            Axios.get(`http://localhost:8000/api/attendence/hasSubmitted/${attendenceId}/${user._id}`).then((res) => {
              if (res.data.data) {
                setHasSubmitted(true);
              }
            });
          }
        }, []);

        React.useEffect(() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          let loc = window.location.href.split("/");
          let attendenceId = loc[loc.length - 1];
          Axios.get(`http://localhost:8000/api/attendenceResult/${attendenceId}`).then((res) => {
            if (res.data.success) {
              setAttendenceResults(res.data.data);
            }
          });
        }, []);
            
        const RenderAttendenceForStudent = () => {
      
          return 
        };
      
        const submitAttendence= () => {
          let loc = window.location.href.split("/");
          let responseObj = {
            attendance_id: loc[loc.length - 1],
            student_id: user._id,
            student_name: user.fName.concat(" ").concat(user.lName),
          };
          setAttendenceResponse(responseObj);

          if (attendenceInfo) {
            if (!attendenceInfo.is_active) {
              return toast.error("Attendence submission is closed");
            }
          }
          Axios.post("http://localhost:8000/api/submitAttendence", attendenceResponse)
            .then((res) => {
              if (res.data.success) {
              } else {
                toast.error("You have already submitted this Attendence");
              }
            })
            .catch((e) => toast.error("You have already submitted this Attendence"));
      
        };
        const startAttendence= () => {
          setIsActive(true);
          let loc = window.location.href.split("/");
          let attendenceId= loc[loc.length - 1];
          forceUpdate();
          Axios.post(`http://localhost:8000/api/startAttendence/${attendenceId}`).then((res) => {
            if (res.data.success) {
            }
          });
        };
      
        const endAttendence = () => {
          setIsActive(false);
          let loc = window.location.href.split("/");
          let attendenceId= loc[loc.length - 1];
          forceUpdate();
          Axios.post(`http://localhost:8000/api/endAttendence/${attendenceId}`).then((res) => {
            if (res.data.success) {
            }
          });
        };
      
        return (
          <div
            className={"background course-container"}
            style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 70 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 25,
                marginLeft: 20,
              }}
            >
              <h2 className="course-title" style={{ fontSize: 30, margin: 0 }}>
                {attendenceInfo ? attendenceInfo.attendence_title : null}
              </h2>
            </div>
      
            <div
              className={"new-post boxshadow"}
              style={{
                width: 60,
                height: 60,
                boxShadow: "1px 1px 5px #ababab",
                display: userType === "teacher" ? "flex" : "none",
              }}
              onClick={() => generatePDF(attendenceResults ? attendenceResults : [])}
            >
              <Download size={30} color="white" />
            </div>
            {userType === "student" ? (
              <React.Fragment>
               
              </React.Fragment>
            ) : (
              <React.Fragment>
               
              </React.Fragment>
            )}
      
            {userType === "teacher" ? (
              <React.Fragment>      
                <div
                  style={{
                    position: "absolute",
                    top: 100,
                    right: 25,
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                  }}
                >
                  {!isActive ? (
                    <button
                      style={{
                        paddingLeft: 15,
                        transition: "0.5s ease",
                        marginTop: 0,
                        // width:120
                      }}
                      onClick={startAttendence}
                      className="btn btn-new"
                    >
                      <PlayCircle size={22} color="white" />
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#fff",
                          margin: 0,
                          fontFamily: "Poppins",
                          letterSpacing: 0.8,
                          // marginLeft: 10,
                          marginTop: 0,
                        }}
                      >
                        Begin Attendence
                      </p>
                    </button>
                  ) : (
                    <button
                      style={{
                        paddingLeft: 15,
                        transition: "0.5s ease",
                        marginTop: 0,
                        // width:120
                      }}
                      className="btn btn-new"
                      onClick={endAttendence}
                    >
                      <XCircle size={22} color="white" />
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#fff",
                          margin: 0,
                          fontFamily: "Poppins",
                          letterSpacing: 0.8,
                          // marginLeft: 10,
                          // marginTop: 0,
                          margin:"auto"
                        }}
                      >
                        End Attendence
                      </p>
                    </button>
                  )}
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* <div
                  style={{
                    width: "100%",
                    marginTop: 20,
                    borderTop: "3px solid",
                    paddingLeft: 25,
                    paddingTop: 30,
                    paddingBottom: 50,
                  }}
                  className="borderrad"
                >
                  {isActive ? (
                    !hasSubmitted ? (
                      <RenderQuizForStudent />
                    ) : (
                      <EmptyStateSmall
                        title="Response submitted"
                        d1="If you think this is a mistake, please contact your teacher"
                      />
                    )
                  ) : (
                    <EmptyStateSmall
                      title="Attendence has not started yet"
                      d1="If you think this is a mistake, please contact your teacher"
                    />
                  )}
                </div> */}
                {isActive && !hasSubmitted ? (
                  <div
                    style={{
                      position: "fixed",
                      top: 90,
                      right: 25,
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                    }}
                  >
                   
                    <button className="btn btn-new" style={{ paddingLeft: 15 }} onClick={submitAttendence}>
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#fff",
                          margin: 0,
                          fontFamily: "Poppins",
                          letterSpacing: 0.8,
                          // marginLeft: 5,
                        }}
                      >
                        Submit
                      </p>
                    </button>
                  </div>
                ) : null}
              </React.Fragment>
            )}
          </div>
        );
      };
      
      export default Attendence;
      
      