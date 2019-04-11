import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        pagesYaml(name: { eq: "Info" }) {
          bio
          gallery {
            display
            url
          }
          contact {
            display
            url
          }
        }
      }
    `}
    render={data => 
  <Layout>
    <div className="flexbox-container">
      <div className="left">
        <h2>bio</h2>
        <p>{data.pagesYaml.bio}</p>

        <h2>contact</h2>
        <ul>
          <li>
            gallery&nbsp;&ndash;&nbsp;<a href={data.pagesYaml.gallery.url}>{data.pagesYaml.gallery.display}</a>
          </li>
          <li>
            studio&nbsp;&ndash;&nbsp;<a href={data.pagesYaml.contact.url}>{data.pagesYaml.contact.display}</a>
          </li>
        </ul>

        <h2>website</h2>
        <ul>
          <li>
            design&nbsp;&ndash;&nbsp;<a href="http://wax-studios.com">Wax Studios</a>
          </li>
          <li>
            development&nbsp;&ndash;&nbsp;<a href="https://devon.fyi">Devon Blandin</a>
          </li>
        </ul>
      </div>

      <div className="right">

        <h2>solo exhibitions</h2>

        <h3>2020</h3>
        <ul>
          <li>Title TBD, Fortnight Institute</li>
          <li>Title TBD, Melanie Flood Projects</li>
        </ul>

        <h3>2019</h3>
        <ul>
          <li>With Child: Carmen Winant and Otto Dix, Worcester Museum of Art</li>
          <li>Title TBD, 14a, Hamburg, Germany</li>
          <li>Expressions Of, 17 Essex, New York, NY</li>
        </ul>

        <h3>2018</h3>
        <ul>
          <li>W.A.R., Cave, Detroit, MI</li>
          <li>Body/Index, Stene Projects, Stockhom, Sweden</li>
        </ul>
      </div>
    </div>
  </Layout>
    }
  />
)