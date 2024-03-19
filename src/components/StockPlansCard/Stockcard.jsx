import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import products from "./products.json";
import { Link } from 'react-router-dom';

function App() {
  return (
    <MDBContainer fluid className="my- text-center">
      <MDBRow>
        {products.map((product) => (
          <MDBCol md="6" lg="4" className="mb-4" key={product.id}>
            <MDBCard>
              <div className="bg-image rounded">
                <MDBCardImage src={product.image} fluid className="w-100" />
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    {product.badges.map((badge, index) => (
                      <h5 key={index}>
                        <span className="badge bg-primary ms-2">{badge}</span>
                      </h5>
                    ))}
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </div>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">{product.name}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>{product.category}</p>
                </a>
                {product.discountPrice ? (
                  <h6 className="mb-3">
                    <s>${product.price}</s>
                    <strong className="ms-2 text-danger">${product.discountPrice}</strong>
                  </h6>
                ) : (
                  <h6 className="mb-3">${product.price}</h6>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;





// import React from "react";
// import { MDBCol, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
// import { Link } from 'react-router-dom';

// function PlanCard({ plan, imageUrl }) {
//   return (
//     <MDBCol md="6" lg="4" className="mb-4" key={plan.id}>
//       <MDBCard>
//         <div className="bg-image rounded">
//           <MDBCardImage src={imageUrl} fluid className="w-100" />
//           <div className="mask">
//             <div className="d-flex justify-content-start align-items-end h-100">
//               {/* Implement logic for badges */}
//               {plan.badges.map((badge, index) => (
//                 <h5 key={index}>
//                   <span className="badge bg-primary ms-2">{badge}</span>
//                 </h5>
//               ))}
//             </div>
//           </div>
//           <div className="hover-overlay">
//             <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
//           </div>
//         </div>
//         <MDBCardBody>
//           <Link to="#" className="text-reset"> {/* Adjust link destination */}
//             <h5 className="card-title mb-3">{plan.planName}</h5>
//           </Link>
//           <Link to="#" className="text-reset"> {/* Adjust link destination */}
//             <p>Risk: {plan.risk}</p>
//           </Link>
//           {/* Implement logic for pricing */}
//           <h6 className="mb-3">Min. Investment: ${plan.minInvestmentAmount}</h6>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//   );
// }

// export default PlanCard;











