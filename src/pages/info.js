import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="flexbox-container">
      <div className="left">
        <h2>bio</h2>
        <p>
          Carmen Winant is an artist and writer based in Columbus, OH. She is
          Assistant Professor of Visual Studies and Contemporary Art History at
          Columbus College of Art and Design, Dean at the Skowhegan School of
          Painting and Sculpture and a co-editor of The Highlights Journal.
        </p>

        <h2>contact</h2>
        <ul>
          <li>
            gallery&nbsp;&ndash;&nbsp;<a href="http://www.skibummacarthur.net">Skibum&nbsp;MacArthur</a>
          </li>
          <li>
            studio&nbsp;&ndash;&nbsp;<a href="mailto:info@carmenwinant.com">info@carmenwinant.com</a>
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
)
