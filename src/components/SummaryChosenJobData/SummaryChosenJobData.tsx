import Wrapper from '@components/Wrapper';
import { IDataPickerSummaryProps } from '@interfaces/Props';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, useState, useEffect } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PieChart from '@charts/PieChart';

const SummaryChosenJobData: FC<IDataPickerSummaryProps> = ({
  chosenJobCreationData,
}) => {
  const [averageReviewLength, setAverageReviewLength] = useState(0);
  const [totalNumbersOfReviews, setTotalNumbersOfReviews] = useState(0);
  const [dataProviders, setDataProviders] = useState<string[]>([]);
  const [originSum, setOriginSum] = useState({});
  const theme = useTheme();
  useEffect(() => {
    invokeSetters();
  }, [chosenJobCreationData]);

  const invokeSetters = () => {
    let weightedValueSum = 0;
    let totalReviewSum = 0;
    let dataProvider: Set<string> = new Set();
    const originSums: { [k: string]: number } = {};

    for (let i = 0; i < chosenJobCreationData.length; i++) {
      weightedValueSum +=
        chosenJobCreationData[i].totalReviews *
        chosenJobCreationData[i].averageLenth;
      totalReviewSum += chosenJobCreationData[i].totalReviews;
      dataProvider.add(chosenJobCreationData[i].uploadedBy);

      originSums[`${chosenJobCreationData[i].origin}`] = 0;
      originSums[`${chosenJobCreationData[i].origin}`] +=
        chosenJobCreationData[i].totalReviews;
    }

    setOriginSum(originSums);
    setDataProviders([...dataProvider]);
    setTotalNumbersOfReviews(totalReviewSum);
    setAverageReviewLength(Math.round(weightedValueSum / totalReviewSum));
  };
  const useStyles = makeStyles(() =>
    createStyles({
      dataLabel: {
        fontSize: '1.2rem',
        display: 'block',
      },
      dataOutput: {
        display: 'block',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
      },
    })
  );
  const classes = useStyles();
  return (
    <div>
      <h1>Summary</h1>
      <Wrapper
        shouldHover={false}
        styles={{
          width: '25vw',
          height: '70vh',
          borderRadius: '1rem',
          overflowY: 'auto',
          '@media (max-height: 731px)': {
              height: '60vh',
          }
        }}
      >
        {chosenJobCreationData.length > 0 ? (
          <>
            <div
              style={{
                height: 'fit-content',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '1.5rem',
              }}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.dataLabel}>First Data Point</span>
                    <span className={classes.dataOutput}>12.10.2020</span>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.dataLabel}>Number of Texts</span>
                    <span className={classes.dataOutput}>
                      {totalNumbersOfReviews}
                    </span>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.dataLabel}>Users</span>
                    <span className={classes.dataOutput}>
                      {dataProviders.map((user) => `${user}, `)}
                    </span>
                  </ListItemText>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.dataLabel}>First Data Point</span>
                    <span className={classes.dataOutput}>12.10.2020</span>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.dataLabel}>
                      Average Text Length
                    </span>
                    <span className={classes.dataOutput}>
                      {averageReviewLength} word
                    </span>
                  </ListItemText>
                </ListItem>
                {/* <ListItem>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.dataLabel}>
                      Data was Provided by
                    </span>
                    <span className={classes.dataOutput}>Users...</span>
                  </ListItemText>
                </ListItem> */}
              </List>
            </div>
            <hr />
            <div style={{
                marginTop: '2rem',
                
            }}>
              <PieChart
                options={{
                  chartWidth: 800,
                  chartHeight: 600,
                  chartMargin: 20,
                }}
                data={originSum}
                chartId="pieChartSummaryChosenJobData"
              />
            </div>
          </>
        ) : (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: '60%',
            }}
          >
            <h2>No Data Chosen</h2>
            <p>Chose Date on the left hand sight</p>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default SummaryChosenJobData;
