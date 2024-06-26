import { Link } from "react-router-dom";
import "./Blog.css";

function BlogApp() {
  return (
    <>
      <Link to="/">Go to home.</Link>
      <div className="blog-root">
        <div className="day">
          <h3 className="date">pre-intern</h3>
          <div className="text">
            <h4>Readings</h4>
            <h6>[TVCG'11-01] J. Stott et al., Automatic Metro Map Layout Using Multicriteria Optimization</h6>
            <p>
              Automatic metro map generation via snapping stations on grid then hill-climbing according to certain criteria. <br/>
              Many possibilities for modifying criteria. Maybe can apply extension to make better visible in crowded regions such as central Sydney or other cities with more complex networks? <br/>
              Also, might be able to group edges in railroad network by represented shape (line segment, small arc, or the combination of two, and alignment...) to represent metro maps with curvature (e.g. JR Yamanote line in Tokyo)
            </p>
            <h6>[TVCG'13-12] N. Ferreira et al., Visual Exploration of Big Spatio-Temporal Urban Data: A Study of New York City Taxi Trips</h6>
            <h6>[EuroVis '16] N. Pezzotti et al., Hierarchical Stochastic Neighbor Embedding</h6>
            <h6>[TVCG'23-01] C. Vajiac et al., TrafficVis: Visualizing Organized Activity and Spatio-Temporal Patterns for Detecting and Labeling Human Trafficking</h6>
            <p>
              Grouping in two layers via text similarity and metadata to show vague relationships between human trafficking texts 
            </p>
            <h6>[PacificVis'23] Y. Kuo et al., Investigating Animal Infectious Diseases with Visual Analytics</h6>
          </div><br/>
        </div>
        <div className="day">
          <h3 className="date">24/01/08 Mon</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>First day of internship - tutorial</h6>
            <h6>Seminar from Dr. Sangho Suh (U of T)</h6>
            <p>
              Human-AI Interaction: Visualizing results of AI such as LLM with certain purposes (e.g. Hierarchical view) <br/>
              Introduced literature: Luminate, Sensecape, CodeToon
            </p>

            <h4>Readings</h4>
            <h6>Lab materials - research tutorial</h6>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/09 Tue</h3>
          <div className="text">
            <h4>Work</h4>

            <h4>Readings</h4>
            <h6>J. Wobbrock, J. Kientz, Research Contributions in Human-Computer Interaction</h6>
            <p>
              Types of contributions in HCI research - emphasis on empirical research (in terms of amount of papers)
            </p>
            <h6>[TVCG'20-01] M. Lu et al., Winglets: Visualizing Association with Uncertainty in Multi-class Scatterplots</h6>
            <p>
              Applying 'winglets' to points in scatterplots in order to visualize high-dimensional clusters in 2D space <br/>
              Design choice evaluations in research - present various candidates and apply edge-cases to see if they qualify
            </p>
            <h6>[TVCG'23-03] D. Shin et al., RCMVis: A Visual Analytics System for Route Choice Modeling</h6>
            <p>
              Design elements required by field experts but not yet implemented <br/>
              Usage of large data such as shared bike GPS data from Seoul: How to get data, and how to analyze?
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/10 Wed</h3>
          <div className="text">
            <h4>Work</h4>

            <h4>Readings</h4>
            <h6>[UIST'00] B. Bederson, Fisheye Menus</h6>
            <h6>[TVCG'12-07] C. Healey, J. Enns, Attention and Visual Memory in Visualization and Computer Graphics</h6>
            <p>
              Human elements affect visualization (and how people interpret visualizations) - postattentive amnesia, change blindness, inattentional blindness, attentional blink... <br/>
              Good visual design: perceptual salience (maintaining ordering between visual features), predictivity, or direct attention such that changes are (not) visible
            </p>
            <h6>[CHI'16] A. Oulasvirta, K. Hornbæk, HCI Research as Problem-Solving</h6>
            <p>
              Problem-Solving approach to HCI Research: Empirical / Conceptual / Constructive <br/>
              Good research improves problem-solving capacity - significance, effectiveness, efficiency, transfer, confidence. <br/>
              Avoid pathological practice, apply problem-solving approach prescriptively to generate ideas. 
            </p>
            <h6>I. Mackenzie, Fitts' Law, in K. Norman, J. Kirakowski, Handbook of Human-Computer Interaction</h6>
            <p>
              Analogy of human motor system as information transfer - can apply Shannon's information capacity to human movement. <br/>
              Throughput(TP) = ID / MT = log(2A/W) / MT, where A=movement amplitude, W=target width, ID=index of difficulty, MT=mean movement time.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/11 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>Lab Seminar</h6>

            <h4>Readings</h4>
            <h6>[TVCG'16-01] K. Wongsuphasawat et al., Voyager: Exploratory Analysis via Faceted Browsing of Visualization Recommendations</h6>
            <p>
              Breadth-first data exploration vs Depth-first data exploration <br/>
              Data variation vs design variation <br/>
              Conceptualize data visualization tool/framework: see Vega and Vega-lite
            </p>
            <h6>[CFG'17] B. Bach et al., A Descriptive Framework for Temporal Data Visualizations Based on Generalized Space-Time Cubes</h6>
            <p>
              Generalized Space-Time Cubes(STCs) ... 2D data (not necessarily geo-spatial) + time axis represented as cubes <br/>
              Various types of operations can be executed on the cube, resulting in different types of visualizations <br/>
              Expansion of STCs to include higher dimensions or multiple axes of time? / OLAP cubes...
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/12 Fri</h3>
          <div className="text">
            <h4>Work</h4>					
            <h6>
              Idea on <a href="https://github.com/ytzka14/NetWarp">NetWarp</a>
            </h6>
            <p>
              Warp map based on geospatial weighted networks <br/>
              Weighted edges work like gravity (gravitational model) - maybe make user control beta value? <br/>
              Existing geographical distance works like elasticity (Hook's law) <br/>
              Apply two types of forces to (physical) graph - then warp map according to displacement (TPS warping?) <br/>
              Contributions? - visualize gravitational model in geography... <br/>
              How to implement? How to maintain network graph topology? <br/>
              Need to be able to run physics simulator on web.
            </p>

            <h4>Readings</h4>
            <h6>[PacificVis'22] T. Zou et al., Hybrid Traffic Route Visual Recommendation Based on Multilayer Complex Networks</h6>
            <p>
              Produce multiple layers of traffic networks according to mode of transport <br/>
              Transfer overhead, budget calculation?
            </p>
            <h6>[CHI'14] S. Hong et al., Traffigram: Distortion for Clarification via Isochronal Cartography</h6>
            <p>
              Web based isochronal cartography <br/>
              Thin-Plate Spline(TPS) Warping <br/>
              Relatively simple network construction (road network nodes, shortest path analysis)
            </p>
            <h6>[PacificVis'21] K. Choe et al., Papers101: Supporting the Discovery Process in the Literature Review Workflow for Novice Researchers</h6>
            <p>
              Metadata collection done manualy <br/>
              Applicable to other fields requiring suggestions based on query/selections - Tourist attraction recommendations? <br/>
              How to consider divergence? (suggest items with dissimilar properties)
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/15 Mon</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Working on <a href="https://github.com/ytzka14/NetWarp">NetWarp</a>
            </h6>

            <h4>Readings</h4>
            <h6>[CFG'17] F. Beck et al., A Taxonomy and Survey of Dynamic Graph Visualization</h6>
            <p>
              Survey paper - classify former research about dynamic graph visualization
            </p>
            <h6>[CHI'23] Y. Choe et al., Assessing Mapper Conflict in OpenStreetMap Using the Delphi Survey Method</h6>
            <p>
              Mainly user behavior survey, implications in OPPC(Online Peer Production Communities) UI design
            </p>
            <h6>[CHI'23] H. Lee et al., Get Distracted or Missed the Stop? Investigating Public Transit Passengers' Travel-Based Multitasking Behaviors, Motives, and Challenges</h6>
            <p>
              Qualitative study based on shadowing and interviews <br/>
              More focus on why people act like this, more than how we can benefit from / improve on these issues
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/16 Tue</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Assignment 1
            </h6>
            <p>
              Working on Brushing & Linking. <br/>
              Brushing done, need to work on linking.
            </p>
            
            <h4>Readings</h4>
            <h6>K. Kwak et al., A Visual Analytics Framework for Inter-Hospital Transfer Network of Stroke Patients</h6>
            <p>
              Visualize spatial movement of patients in three-layer(national, provincial, local) layout, in three time intervals... <br/>
              How to improve on map visualization?
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/17 Wed</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Assignment 1
            </h6>
            <p>
              Implementation done (<a href="https://github.com/ytzka14/snu-infovis-assn-1-skeleton">github</a>).
            </p>

            <h4>Readings</h4>
            <h6>[InfoVis'05] D. Phan et al., Flow Map Layout</h6>
            <p>
              Automatic flow map layout based on minimizing edge crossings <br/>
              How to implement with recent tools(D3, ...)? <br/>
              Apply provided node clustering, and visualize flow according to cluster? <br/>
            </p>
            <h6>P. Rodgers et al., A Task-Based Evaluation of Combined Set and Network Visualization</h6>
            <p>
              "Spatial rights" of set vs. network when visualizing combined set and network. <br/>
              Proposed "SetNet" effective but not applicable to geospatial data (since nodes need to be fixed at location)
            </p>
            <h6>[TVCG'13-11] W. Meulemans et al., KelpFusion: a Hybrid Set Visualization Technique</h6>
            <p>
              Increase readability of overlapping sets compared to Bubble Sets. <br/>
              Questionable efficiency when certain nodes are included in numerous sets (such as in K. Kwak et al.)?
            </p>
            <h6>N. Dugué, A. Perez, Direction Matters in Complex Networks: A Theoretical and Applied Study for Greedy Modularity Optimization</h6>
            <p>
              Community detection in directed (weighted) graphs - using weight or Kronecker delta function. <br/>
              Trends of finding excessive communities? Is the idea of 'modularity' applicable to all situations (such as in K. Kwak et al.)? <br/>
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/18 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>Lab Seminar - Invited Talk from Dr. Dae Hyun Kim (KAIST)</h6>
            <p>
              Text-visualization linking
            </p>

            <h4>Readings</h4>
            <h6>R. A. Bolt, "Put-That-There": Voice and Gesture at the Graphics Interface</h6>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/19 Fri</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>Meeting</h6>
            <p>
              Ideation on research theme <br/>
              Need to search more on current unsolved problems in geography <br/>
            </p>

            <h4>Readings</h4>
            <h6>[TVCG'14-12] W. Zeng et al., Visualizing Mobility of Public Transportation System</h6>
            <p>
              Isotime flow map + mobility wheel to visualize time efficiency of routes <br/>
              Acquiring real data for metro system?
            </p>
            <h6>[CHI'23] L. Zhang-Kennedy et al., Passenger Perceptions, Information Preferences, and Usability of Crowding Visualizations on Public Displays in Transit Stations and Vehicles</h6>
            <h6>J. Wood et al., Visualisation of Origins, Destinations and Flows with OD Maps</h6>
            <p>
              Place gridded D map inside each grid of gridded O map to visualize OD Pairs without cluttering. <br/>
              Apply dasymetric mapping to grid+geographic shapes to provide higher accuracy in grid?
            </p>
            <h6>I. Boyandin et al., Using Flow Maps to Explore Migrations Over Time</h6>
            <h6>[TVCG'09-6] D. Guo, Flow Mapping and Multivariate Visualization of Large Spatial Interaction Data</h6>
            <p>Hierarchical clustering of nodes based on modality to reduce cluttering. <br/>
            Color-coding edges in flow map + using PCP(Parallel Coordinate Plot) to visualize characteristics of each edge. </p>
            <h6>[TVCG'11-12] K. Verbeek et al., Flow Map Layout via Spiral Trees</h6>
            <p>
              Flow map without edge crossing and smooth edges (from work of Phan et al.) <br/>
              Again, how to apply predefined node clustering? Usage of color coding in OD edge? (such as Boyandin et al.)
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/22 Mon</h3>
          <div className="text">
            <h4>Work</h4>

            <h4>Readings</h4>
            <h6>[EuroVis'18] Y. Yang et al., Maps and Globes in Virtual Reality</h6>
            <p>
              Exocentric globe more familiar to users, and thus beneficial even in VR conditions
            </p>
            <h6>[InfoVis'22] W. Wang et al., Topology-Aware Space Distortion for Structured Visualization Spaces</h6>
            <p>
              Apply (possibly delicately calculated set of) geographic projections to create distortion without information loss <br/>
              For example, apply Mercator to position 90 degrees apart from focus to expand view of focus area <br/>
              But difficult to apply to local area?
            </p>
            <h6>[UIST'12] C. Pindat et al., JellyLens: Content-Aware Adaptive Lenses</h6>
            <h6>[TVCG'19-01] Y. Yang et al., Origin-Destination Flow Maps in Immersive Environments</h6>
            <p>
              Various ways of displaying OD flow maps in VR space - distance height is effective
            </p>
            <h6>[EuroVis'11] J. Brosz et al., The Undistort Lens</h6>
            <p>
              By color grid matching, undistort parts of distorted image and back-map. <br/>
              Able to not only undistort images but map projections too.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/23 Tue</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Assignment 2
            </h6>
            <p>
              Main visualization, select done. <br/>
              Need to add brushing and data table.
            </p>

            <h4>Readings</h4>
            <h6>M. Batty, Visualizing Aggregate Movement in Cities</h6>
            <p>
              Various visualization methods of geographical movements
            </p>
            <h6>J. Brainerd, A. Pang, Interactive Map Projections and Distortion</h6>
            <p>
              Show floating ring to visualize distortion in different projections <br/>
              Does not consider additional data
            </p>
            <h6>[T-ITS'20-01] F. Kamw et al., Urban Structure Accessibility Modeling and Visualization for Joint Spatiotemporal Constraints</h6>
            <p>
              Construct accessibility graph weighted by time, and perform set joint operations <br/>
              Visualize by color, define regions via concave hull
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/24 Wed</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Assignment 2
            </h6>
            <p>
              Study & apply CSS, working on transition
            </p>

            <h4>Readings</h4>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/25 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Assignment 2
            </h6>
            <p>
              Implementation done (<a href="https://github.com/ytzka14/snu-infovis-assn-2-skeleton">github</a>).
            </p>
            <h6>
              Lab Seminar
            </h6>

            <h4>Readings</h4>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/26 Fri</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Assignment 3
            </h6>
            <p>
              Implementation done (<a href="https://github.com/ytzka14/snu-infovis-assn-3-skeleton">github</a>).
            </p>

            <h4>Readings</h4>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/29 Mon</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              React+typescript toy project (gacha-vite)
            </h6>

            <h4>Readings</h4>
            <h6>R. Soden et al., Evaluating Interpretive Research in HCI</h6>
            <p>
              Interpretive research is fundamentally different from positivist research. <br/>
              Qualitative, case-specific research must be viewed in a different scope. <br/>
              Shows interdisciplinary characteristic of HCI - similar debates in the history of geography?
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/30 Tue</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Gacha-vite initial build released (<a href="https://ytzka14.github.io/gacha/">github</a>).
            </h6>

            <h4>Readings</h4>
            <h6>M. J. Crotty, Chapter 1: Introduction: The Research Process, from The Foundations of Social Research</h6>
            <p>
              Epistemology - Theoretical perspective - Methodology - Methods four-scale structure <br/>
              A researcher can provide various connections inter- and intra-scale (with some restrictions) <br/>
              Objectivist (epistemology) + Pragmatist (theoretical perspective)...?
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/01/31 Wed</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Seminar from Dr. Eun Kyoung Choe (UMD College Park), Day 1
            </h6>
            <p>
              Introduction to qualitative analysis, epistemology
            </p>

            <h4>Readings</h4>
            <h6>D. Byrne, A Worked Example of Braun and Clarke's Approach to Reflexive Thematic Analysis</h6>
            <p>
              Example of RTA, with concrete explanations of theoretical assumptions and six phases of RTA posed by original authors. <br/>
              Naming of article: why emphasis on 'example of RTA' than findings of RTA itself?
            </p>
            <h6>[CHI'23] R. Bowman et al., Using Thematic Analysis in Healthcare HCI at CHI: A Scoping Review</h6>
            <p>
              Scoping review of TAs conducted in papers of CHI, 2012-2021. TA is often used without further understanding. <br/>
              Citing RTA but not following actual RTA procedures, or lacking precise details of how RTA was conducted is a problem. <br/>
              Connecting to Soden: Qualitative research is often misunderstanded by reviewers, but conductors themselves too? <br/>
              Especially, linkage to psychology and HCI(how people react to provided HCI technology or systems...)?
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/01 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Seminar from Dr. Eun Kyoung Choe (UMD College Park), Day 2
            </h6>
            <p>
              Introduction to Thematic Analysis
            </p>

            <h4>Readings</h4>
            <h6>V. Braun, V. Clarke, One Size Fits All? What Counts as Quality Practice in (Reflexive) Thematic Analysis?</h6>
            <p>
              A more precise explanation about reflexive TA (from Braun and Clarke 2006) <br/>
            </p>
            <h6>S. J. Tracy, Qualitative Quality: Eight "Big-Tent" Criteria for Excellent Qualitative Research</h6>
            <p>
              Checklist for qualitative research
            </p>
            <h6>[CSCW'19] N. McDonald et al., Reliability and Inter-rater Reliability in Qualitative Research: Norms and Guidelines for CSCW and HCI Practice</h6>
            <p>
              Qualitative research about current practice in CSCW and HCI. <br/>
              IRR can be overkill or even harmful for some cases.
            </p>
            <h6>[CHI'16] K. Caine, Local Standards for Sample Size at CHI</h6>
            <p>
              Current distribution of sample size for published papers in CHI. <br/>
              Emphasis that small N does not mean bad research, but ignores certain qualitative research cases where stating demographics itself is non-ethic? <br/>
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/02 Fri</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Seminar from Dr. Eun Kyoung Choe (UMD College Park), Day 3
            </h6>
            <p>
              Evaluating qualitative research: reflexivity, rigor, credibility, transferrability
            </p>

            <h4>Readings</h4>
            <h6><a href="https://medium.com/@caliang/reflexivity-positionality-and-disclosure-in-hci-3d95007e9916">
              C. Liang, "Reflexivity, positionality, and disclosure in HCI"
            </a></h6>
            <p>
              Difference between reflexivity, positionality, and disclosure. <br/>
              Positionality do not need to be identity-based. <br/>
              Skimmed through, but need more thorough reading of original article.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/05 Mon</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Seminar from Dr. Eun Kyoung Choe (UMD College Park), Day 4
            </h6>
            <p>
              How to create good research questions, discussion on readings.
            </p>

            <h4>Readings</h4>
            <h6>[CHI'23] Family Negotiation in Joint Media Engagement with Creative Computing</h6>
            <p>
              Thematic analysis study with hispanic/latino families <br/>
              Impact of language (of researchers and/or participants) on qualitative study? <br/>
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/06 Tue</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Seminar from Dr. Eun Kyoung Choe (UMD College Park), Day 5
            </h6>
            <p>
              Discussion on readings.
            </p>

            <h4>Readings</h4>
            <h6>[CHI'22] Jury Learning: Integrating Dissenting Voices into Machine Learning Models</h6>
            <p>
              Loose analogy to the legislative jury system: machine learning model selects jurors based on given criteria to provide weighted results. <br/>
              Can show results specialized to given input - discussions?
            </p>
            <h6>[CHI'20] The Role of Everyday Sounds in Advanced Dementia Care</h6>
            <p>
              Thematic analysis on people with dementia reacting with Vita (audio cushion). <br/>
              Discussions - Qualitative analysis on actions? Wouldn't the type of audio impact research significantly? Definition/range of "Everyday Sounds"?
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/07 Wed</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Refined idea on NetWarp.
            </h6>
            <h6>
              Sort Google Scholar reading list.
            </h6>

            <h4>Readings</h4>
            <h6>E. J. Taaffe, H. L. Gauthier, Jr., Chapter 3: The Gravity Model, from Geography of Transportation</h6>
            <p>
              Introduction to spatial interaction model, calculation of constants done by regression.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/08 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Lab Seminar
            </h6>

            <h4>Readings</h4>
            <h6>[TVCG'22-12] Z. Deng et al., Multilevel Visual Analysis of Aggregate Geo-Networks</h6>
            <p>
              Hierarchical clustering of networks based on number of shared edges. <br/>
              Various quantitative factors to design minimal crossing edge network.
            </p>
            <h6>T. VoPham et al., Emerging Trends in Geospatial Artificial Intelligence (geoAI): Potential Applications for Environmental Epidemiology</h6>
            <p>
              Survey on current applications of AI on geospatial data, mainly focused on environmental research.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/13 Tue</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Meeting
            </h6>
            <p>
              Ideation on research theme. <br/>
              Data-driven distortion evaluation?
            </p>

            <h4>Readings</h4>
            <h6>[SIGSPATIAL'17] W. Duan et al., Automatic Alignment of Geographic Features in Contemporary Vector Data and Historical Maps</h6>
            <p>
              Algorithm for aligning vector data with scanned map raster data. <br/>
              Usage of color bin growth rate to automatically detect feature color. <br/>
              Not application of AI?
            </p>
            <h6>[SIGSPATIAL'23] H. Bast et al., Efficient Interactive Visualization of Very Large Geospatial Query Results</h6>
            <p>
              Middle-end for geospatial query handling: buffer and compression.
            </p>
            <h6>E. J. Taaffe, H. L. Gauthier, Jr., Geography of Transportation</h6>
            <p>
              Full skim-reading, extended from former gravity model chapter. <br/>
              Mostly identical to Transport Geography lecture slides. <br/>
              Suspended NetWarp.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/14 Wed</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Fix bugs in gacha-vite.
            </h6>
            
            <h4>Readings</h4>
            <h6>K. Kerkovits, C. Szigeti, Relationships between the Distortions in Map Projections and the Usability of Small-Scale Maps</h6>
            <p>
              User test on map distortions, but mainly focusing on each distortion type. <br/>
              Control and test map projections were given by researchers, task-related but not data-driven.
            </p>
            <h6>S. E. Battersby et al., Shapes on a Plane: Evaluating the Impact of Projection Distortion on Spatial Binning</h6>
            <p>
              Focused on spatial binning - effect of distortion on percieved bin count and density.
            </p>
            <h6>S. E. Battersby, F. C. Kessler, Cues for Interpreting Distortion in Map Projections</h6>
            <p>
              Study on how novices and geography students recognize distortion in various map projections. <br/>
              Cues are mainly focused on regions with most shape distortions, and not accurate.
            </p>
            <h6>K. A. Mulcahy, K. C. Clarke, Symbolization of Map Projection Distortion: A Review</h6>
            <p>
              Various methods of symbolizing distortion - more emphasis on communication, not analysis.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/15 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Lab Seminar
            </h6>

            <h4>Readings</h4>
            <h6>A. H. Robinson et al., Chapter 5: Map Projections, from Elements of Cartography</h6>
            <p>
              Mulcahy & Clarke presents a more descriptive explanation of the chapter.
            </p>
            <h6>J. P. Snyder, Chapter 6: Classification and Selection of Map Projections, from Map Projections - A Working Manual</h6>
            <p>
              Hierarchical selection of map projections according to region mapped, preserved characteristics, centered area...
            </p>
            <h6>K. Kerkovits, Quadrature Rules to Calculate Distortions of Map Projections</h6>
            <p>
              Analysis of methods for integrating when calculating Airy's error across spherical regions. <br/>
              Global distortion value (Meshcheryakov 1968, Kerkovits 2017)?
            </p>
            <h6>K. Kerkovits, Lesson 7: Distortions in Terms of Partial Derivatives, Lesson 8: Tissot's Theory of Map Distortion, Lesson 9: Map Distortions in Practice, from Map Projections: Lecture Notes for Students in Cartography and Geoinformatics MSc Programme</h6>
            <p>
              Mathematical reasoning of various distortion metrics including Tissot's indicatrix.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/16 Fri</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Bug fix on gacha-vite.
            </h6>

            <h4>Readings</h4>
            <h6>A. H. Robinson, The Use of Deformational Data in Evaluating World Map Projections</h6>
            <p>
              Severly outdated (1951), basic quantitative analysis for projection selection via mean maximum angular distortion
            </p>
            <h6>A. J. Kimerling et al., Statistical Comparison of Map Projection Distortions Within Irregular Areas</h6>
            <p>
              Ultimately identical idea to global distortion value, but calculated via Monte Carlo integration instead of Gaussian quadrature.
            </p>
            <h6>G. B. Airy, Explanation of a Projection by Balance of Errors for Maps Applying to a Very Large Extent of the Earth's Surface; and Comparison of this Projection with Other Projections</h6>
            <p>
              Initial suggestion of error in terms of exaggeration and distortion.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/19 Mon</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Minor tweak on NetWarp
            </h6>

            <h4>Readings</h4>
            <h6>K. Kerkovits, Comparing Finite and Infinitesimal Map Distortion Measures</h6>
            <p>
              Statistical analysis of various distortion measures. <br/>
              Finite distortion measures can be replaced by similar infinitesimal measures. <br/>
              Usability of Jordan-Kavrayskiy criterion and Airy-Kavrayskiy criterion?
            </p>
            <h6>K. Kerkovits, A Statistical Reinterpretation and Assessment of Criteria Used for Measuring Map Projection Distortion</h6>
            <p>
              Extended mathematical and statistical description of Airy-Kavrayskiy criterion. <br/>
              Should check on Canters (2002) and Gott III (2007).
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/20 Tue</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Update on NetWarp.
            </h6>

            <h4>Readings</h4>
            <h6> J. R. Gott III et al., Map Projections Minimizing Distance Errors</h6>
            <p>
              RMS logarithmic distance error between random points to evaluate distance distortion. <br/>
              Force method for improving distances - applicable on various cases (including higher dimensions)!? 
            </p>
            <h6>M. Basaraner, S. Cetinkaya, New Measures for Analysis and Comparison of Shape Distortion in World Map Projections</h6>
            <p>
              Shape distortion and elongation as new finite measures. <br/>
              Main contribution is considering boundaries of landmasses. - different from flexion & skewness.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/21 Wed</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Implementation of physics in NetWarp done.
            </h6>

            <h4>Readings</h4>
            <h6>F. Canters, Small-scale Map Projection Design</h6>
            <p>
              Thorough textbook regarding map projections of small-scale. <br/>
              Does not include aesthetic considerations. <br/>
              Theories regarding distortion are more well-explained in Kerkovits. <br/>
              Idea on distortion on foci with no context loss - Snyder 1987, Kadmon 1975, Cauvin and Schneider 1989. ([InfoVis'22] W. Wang et al.)
            </p>
            <h6>I. O. Bildirici, Quasi Indicatrix Approach for Distortion Visualization and Analysis for Map Projections</h6>
            <p>
              Focus on reducing programming effort for computer analysis of map projections. <br/>
              Quasi indicatrices yielding very similar statistics to Tissot's indicatrices but without need for derivation via SVD.
            </p>
            <h6>J. Yan et al., Averaged Ratio between Complementary Profiles for Evaluating Shape Distortions of Map Projections and Spherical Hierarchical Tesellations</h6>
            <p>
              New criteria, but similar to Kerkovits based on Tissot. <br/>
              First tessellation on map, then back-projected onto sphere to calculate distortion based on small-circle arc lengths. <br/>
              Similar result to abs(a/b) - infinitesimal shape distortions? Then ln(a/b) might improve on this (Kerkovits 2017).
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/22 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Outline of citation flow
            </h6>
            <h6>
              Initial commit on SCoMap(https://github.com/ytzka14/steady-cohesive-map-projections)
            </h6>

            <h4>Readings</h4>
            <h6>J. H. Kunimune, Minimum-error World Map Projections Defined by Polydimensional Meshes</h6>
            <p>
              Define map projections via mesh instead of mathematical definitions. <br/>
              L-BFGS on neo-Hookean strain energy to optimize cost.
            </p>
            <h6>D. M. Goldberg, J. R. Gott III, Flexion and Skewness in Map Projections of the Earth</h6>
            <p>
              Introduction of the global distortion values of flexion and skewness: not on infinitesimal point, but local region instead.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/23 Fri</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Fix action of sinusoidal projections in SCoMap.
            </h6>
            <h6>
              Lab Seminar
            </h6>

            <h4>Readings</h4>
            <h6>P. Laskowski, Part 1: Distortion-Spectrum Fundamentals A New Tool for Analyzing and Visualizing Map Distortions</h6>
            <p>
              Pointing out the dimension inequality of various distortion criteria. <br/>
              Outdated after the study by Kerkovits?
            </p>
            <h6>P. Laskowski, Part 2: Distortion-Spectrum Applications Projection Cross-Breeding</h6>
            <p>
              Laskowski's 'projection cross-breeding' is not really a projection breeding, but rather just a form of linearly aggregated distortion criteria. <br/>
              Here also, the data's relative form is not considered; just minimizing distortion at each data point is achieved.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/26</h3>
          <div className="text">
            <h4>Day Off.</h4>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/27 Tue</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>Add features in SCoMap</h6>
            <p>
              Implement SelectList to be more usable. Data selectable from pre-defined JSON files.
            </p>

            <h4>Readings</h4>
            <h6>J. Venna, S. Kaski, Local Multidimensional Scaling with Controlled Tradeoff between Trustworthiness and Continuity</h6>
            <p>
              Introduction of trustworthiness and continuity.
            </p>
            <h6>B. Jenny et al., Flex Projector - Interactive Software for Designing World Map Projections</h6>
            <p>
              User-defined parallel length, angle, and distance between parallels -{">"} Graphical design of map projection. <br/>
              Trial-and-error for distortion reduction?
            </p>
            <h6>B. Jenny et al., Graphical Design of World Map Projections</h6>
            <p>
              Mathematical explanation of 'Flex Projector'. <br/>
              Čapek's Q index (acceptance index) - global measure for distortion based on acceptable distortion threshold.
            </p>
            <h6>B. Jenny, T. Patterson, Blending World Map Projections with Flex Projector</h6>
            <p>
              Simple implementation of projection blending techniques.
            </p>
            <h6>B. Jenny, B. Šavrič, Chapter 8: Combining World Map Projections, from Choosing a Map Projection</h6>
            <p>
              Methods for combining world map projections: juxtaposition, arithmetic mean, software-based table tweaking.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/28 Wed</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Organize literature.
            </h6>

            <h4>Readings</h4>
            <h6>J. P. Snyder, "Magnifying-Glass" Azimuthal Map Projections</h6>
            <p>
              Alter scale factors of azimuthal map projections according to radial distance from center to show magnifying-glass effect. <br/>
              Development from [InfoVis'22] W. Wang et al.?
            </p>
            <h6>[TVCG'22-01] H. Jeon et al., Measuring and Explaining the Inter-Cluster Reliability of Multidimensional Projections</h6>
            <p>
              Expansion of trustworthiness and continuity to include inter-cluster distortions.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/02/29 Thu</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Lab Seminar
            </h6>

            <h4>Readings</h4>
            <h6>G. Filomena et al., A Computational Approach to 'The Image of the City'</h6>
            <p>
              Computational analysis of the five components of Lynch's 'The Image of the City'.
            </p>
            <h6>M. Villanueva, C. Gonzalo, Maps, Values, and Representations: Deconstructing Eurocentrism Among European Primary Teachers</h6>
            <p>
              Grounded theory analysis on hand-drawn world maps of european primary teachers. <br/>
              Exaggeration / omission of certain geographic features effected by culture, history, geographical proximity, ...
            </p>
            <h6>B. Šavrič et al., User Preferences for World Map Projections</h6>
            <p>
              User survey of binomially comparing map projections. <br/>
              Difference between map readers and experts, but neglectable effects of other variables such as age, gender, education, etc.
            </p>
            <h6>G. M. León et al., Mapping the Global South: Equal-Area Projections for Choropleth Maps</h6>
            <p>
              Reference #29 is wrong - need to check on the reasoning behind mapping the US with Albers projection. <br/>
              Ultimate premise of equal-area, user survey of preference between equal-area projections. <br/>
              Emphasised importance of projections, but not guide or evaluation of projection selection.
            </p>						
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/03/04 Mon</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Coursework.
            </h6>

            <h4>Readings</h4>
            <h6>H. Jeon et al., ZADU: A Python Library for Evaluating the Reliability of Dimensionality Reduction Embeddings</h6>
            <p>
              Visualization of various dimensionality reduction methods with python.
            </p>
          </div>
        </div>
        <div className="day">
          <h3 className="date">24/03/~</h3>
          <div className="text">
            <h4>Work</h4>
            <h6>
              Coursework.
            </h6>

            <h4>Readings</h4>
            <h6>P. C. Gosling, E. Symeonakis, Automated Map Projection Selection for GIS</h6>
            <p>
              Predefined list of projections for subject region and purposes. <br/>
              Not data driven, just python implementation of Snyder's hierarchical projection selection scheme.
            </p>
            <h6>A. Yoshizumi et al., A Review of Geospatial Content in IEEE Visualization Publications</h6>
            <p>
              Survey of geospatial content in IEEE VIS from 2017 to 2019. <br/>
              Raw data spreadsheet given, accessible point data retreived.
            </p>
            <h6>Y. Wakabayashi, Role of Geographic Knowledge and Spatial Abilities in Map Reading Process: Implications for Geospatial Thinking</h6>
            <p>
              Small-scale map interpretion relies on reader's geography knowledge and experience.
            </p>
            <h6>K. Ooms et al., Education in Cartography: What is the Status of Young People's Map-reading Skills?</h6>
            <p>
              Survey on map reading skills on young students (Methods similar to Wakabayashi).
            </p>
            <h6>F. Harvey, J. Kotting, Teaching Mapping for Digital Natives: New Pedagogical Ideas for Undergraduate Cartography Education</h6>
            <p>
              Cartography pedagogy: irrelevant.
            </p>
            <h6>B. Jenny, Adaptive Composite Map Projections</h6>
            <p>
              Development of composite map projection system to display on HTML5 with minimum areal distortion. <br/>
              Inconsistent form of distortion -{">"} Hard to compensate for readers? <br/>
              Would be interesting to implement and visualize local distortion scores interactively. <br/>
              Is this better than a simply rendered globe?
            </p>
            <h6>J. Sun et al, Extending Sammon Mapping with Bregman Divergences</h6>
            <p>
              Using Bregman divergences can improve on reducing stress. <br/>
              This paper modifies the stress function itself - implementation?
            </p>
            <h6>L. Yang, Sammon's Nonlinear Mapping Using Geodesic Distances</h6>
            <p>
              Apply geodesic distance to NLM. Not actually geographical application.
            </p>
            <h6>L. Yang, Distance-preserving Projection of High-dimensional Data for Nonlinear Dimensionality Reduction</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogApp;