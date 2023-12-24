import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "98%",
        height: "85%",
        marginTop: "10%",
        border: "1px solid rebeccapurple",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
        >
          <Tab label="About Me" {...a11yProps(0)} style={{ color: "white", fontSize: "12px" }} />
          <Tab
            label="Experience"
            {...a11yProps(1)}
            style={{ color: "white", fontSize: "12px" }}
          />
          <Tab label="Education" {...a11yProps(2)} style={{ color: "white", fontSize: "12px" }} />
          <Tab label="Languages" {...a11yProps(3)} style={{ color: "white", fontSize: "12px" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        As a dedicated and motivated full-stack developer, I have honed my
        skills and expertise over the past 1.5 years to become a valuable asset
        in the world of web and software development. My passion for coding and
        problem-solving, combined with my commitment to continuous learning, has
        allowed me to excel in both front-end and back-end development, creating
        seamless and innovative digital experiences.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ul style={{marginLeft: "10px"}}>
          <li style={{paddingBottom: "10px"}}>IT Support – JSC Silknet, 2012 – present.</li>
          <li style={{paddingBottom: "10px"}}>
            Billing software developer – Desktop app was created in 2008 for
            United Telecom of Georgia with Microsoft Access and Visual Basic.
          </li>
          <li style={{paddingBottom: "10px"}}>IT Support – United Telecom of Georgia, 2007 – 2012.</li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ul style={{marginLeft: "10px"}}>
          <li style={{paddingBottom: "10px"}}>
            Web development and Computer Science. Self-lerning and skill
            development (online courses, webinars and tutorials, reading and
            research, online communities, personal projects). 2002 - present
          </li>
          <li style={{paddingBottom: "10px"}}>
            Bachelor's academic Degree with Major in Computer Technologies.
            Akaki Tsereteli State University, Kutaisi, Georgia 2002 - 2006
          </li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ul style={{marginLeft: "10px"}}>
          <li style={{paddingBottom: "10px"}}>Georgian – Native</li>
          <li style={{paddingBottom: "10px"}}>English – B2</li>
          <li style={{paddingBottom: "10px"}}>Russian – B2</li>
        </ul>
      </CustomTabPanel>
    </Box>
  );
}

export default BasicTabs;
