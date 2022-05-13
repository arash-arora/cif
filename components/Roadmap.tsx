import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
// import FastfoodIcon from '@mui/icons-material/Fastfood'
// import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import { FiTrendingUp } from 'react-icons/fi'
// import HotelIcon from '@mui/icons-material/Hotel'
import { MdSpeed } from 'react-icons/md'
import { AiOutlineBulb } from 'react-icons/ai'
import { VscSymbolStructure } from 'react-icons/vsc'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
// import RepeatIcon from '@mui/icons-material/Repeat'
import Typography from '@mui/material/Typography'

export default function CustomizedTimeline() {
  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center bg-[#F9FAFB] py-20">
        <h1 className="text-4xl font-bold ">How we'll help</h1>
        <Timeline position="alternate" className="mt-20">
          <TimelineItem>
            {/* <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              9:30 am
            </TimelineOppositeContent> */}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <AiOutlineBulb className="h-6 w-6" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Idea Stage
              </Typography>
              <Typography>
                Finally turn your ideas into a real business using a proven
                step-by-step process, with constant feedback from experts for
                years to come.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            {/* <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              10:00 am
            </TimelineOppositeContent> */}
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <VscSymbolStructure className="h-6 w-6" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                MVP Stage
              </Typography>
              <Typography>
                Pivot or persevere quickly using a structured analytical
                approach, with personalized guidance and advice from seasoned
                entrepreneurs.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <HiOutlineOfficeBuilding className="h-6 w-6" />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.primary' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Early Company Stage
              </Typography>
              <Typography>
                Build a global, funded business with the world's largest network
                of CEOs, advisors, and investors
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.primary' }} />
              <TimelineDot color="secondary">
                <MdSpeed className="h-6 w-6" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Business Acceleration
              </Typography>
              <Typography>We help in the scaling the business!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.primary' }} />
              <TimelineDot color="primary" variant="outlined">
                <FiTrendingUp className="h-6 w-6" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Business & Product Evolution
              </Typography>
              <Typography>
                Evolving the business & products to build a long-term
                sustainable business.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  )
}
