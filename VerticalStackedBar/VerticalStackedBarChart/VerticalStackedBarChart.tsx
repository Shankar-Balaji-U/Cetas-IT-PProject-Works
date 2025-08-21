import * as React from 'react';
import { IPartialTheme, ThemeProvider, createTheme } from '@fluentui/react';
import {
  VerticalStackedBarChart as FluentUiVerticalStackedBarChart,
  VerticalStackedBarChartProps as FlutterUiVerticalStackedBarChartProps,
  VSChartDataPoint, getColorFromToken
} from '@fluentui/react-charts';


export interface VerticalStackedBarChartProps extends FlutterUiVerticalStackedBarChartProps {
  theme: string | null;
  key: string;
}
// data?: VSChartDataPoint[];


export class VerticalStackedBarChart extends React.Component<VerticalStackedBarChartProps> {
  public render(): React.ReactNode {
    const _theme = React.useMemo(() => {
      try {
        return this.props.theme ? createTheme(JSON.parse(this.props.theme) as IPartialTheme) : undefined;
      } catch (ex) {
        console.error('Cannot parse VerticalStackedBarChart.props.theme', ex);
        return undefined;
      }
    }, [this.props.theme]);

    return (
      <ThemeProvider theme={_theme} style={{ backgroundColor: 'transparent' }}>



        {/* 


      {showAxisTitles && (
        <div style={rootStyle}>
          <VerticalStackedBarChart
            culture={window.navigator.language}
            chartTitle={chartTitle}
            barGapMax={barGapMax}
            data={data}
            height={height}
            width={width}
            margins={margins}
            lineOptions={lineOptions}
            legendProps={{
              allowFocusOnLegends: true,
              canSelectMultipleLegends: legendMultiSelect,
            }}
            hideLabels={hideLabels}
            yAxisTitle={
              showAxisTitles ? "Variation of number of sales" : undefined
            }
            xAxisTitle={showAxisTitles ? "Number of days" : undefined}
            roundCorners={roundCorners}
            roundedTicks={true}
            styles={{ svgTooltip: classes.svgTooltip }}
          />
        </div>
      )}

      {!showAxisTitles && (
        <div style={rootStyle}>
          <VerticalStackedBarChart
            data={data}
            height={height}
            width={width}
            margins={margins}
            lineOptions={lineOptions}
            legendProps={{
              allowFocusOnLegends: true,
              canSelectMultipleLegends: legendMultiSelect,
            }}

            styles={{ svgTooltip: classes.svgTooltip }}
          />
        </div>
      )} */}





        <FluentUiVerticalStackedBarChart
          // culture={window.navigator.language}
          chartTitle={this.props.chartTitle}
          // barGapMax={this.props.barGapMax}
          data={this.props.data || []}
          height={this.props.height}
          width={this.props.width}
        // margins={this.props.margins}
        // lineOptions={this.props.lineOptions}
        // legendProps={{
        //   allowFocusOnLegends: this.props.legendProps?.allowFocusOnLegends,
        //   canSelectMultipleLegends: this.props.legendProps?.canSelectMultipleLegends,
        // }}
        // hideLabels={this.props.hideLabels}
        // roundCorners={this.props.roundCorners}
        // roundedTicks={true}
        // barWidth={this.props.barWidth}
        // // colors={this.props.colors}
        // hideLegend={this.props.hideLegend}
        // onRenderCalloutPerDataPoint={this.props.onRenderCalloutPerDataPoint}
        // onRenderCalloutPerStack={this.props.onRenderCalloutPerStack}
        // styles={this.props.styles}
        // hideTooltip={this.props.hideTooltip}
        // xAxisTitle={this.props.xAxisTitle}
        // yAxisTitle={this.props.yAxisTitle}
        // yMaxValue={this.props.yMaxValue}
        // yMinValue={this.props.yMinValue}
        />
      </ThemeProvider>
    );
  }
}