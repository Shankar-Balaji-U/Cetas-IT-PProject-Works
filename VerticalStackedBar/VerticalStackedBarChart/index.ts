import * as React from "react";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { VerticalStackedBarChart, VerticalStackedBarChartProps } from "./VerticalStackedBarChart";
import { VerticalStackedChartProps, VSChartDataPoint, VerticalBarChartDataPoint } from '@fluentui/react-charts';
import { DataSetProps } from "./types";

export class VerticalStackedBarChartMain implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    context: ComponentFramework.Context<IInputs>;
    items: VerticalBarChartDataPoint[];
    enableCustomColor: boolean;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this.context = context;
        this.context.mode.trackContainerResize(true);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const dataPoints: VerticalStackedChartProps[] = [];
        const dataset = context.parameters.Items;

        if (dataset && dataset.sortedRecordIds) {
            dataset.sortedRecordIds.forEach(recordId => {
                const record = dataset.records[recordId];
                dataPoints.push({
                    x: record.getValue(DataSetProps.XValue) as string | number | Date,
                    y: record.getValue(DataSetProps.YValue) as number,
                    color: record.getValue(DataSetProps.Color) as string,
                    legend: record.getValue(DataSetProps.Legend) as string,
                    xAxisCalloutData: record.getValue(DataSetProps.XAxisCalloutData) as string,
                    yAxisCalloutData: record.getValue(DataSetProps.YAxisCalloutData) as string,
                    callOutAccessibilityData: { ariaLabel: record.getValue(DataSetProps.AriaLabel) as string }
                });
            });
        }

        const props: VerticalStackedBarChartProps = {
            theme: context.parameters.Theme.raw,
            key: JSON.stringify(dataPoints),

            chartTitle: context.parameters.Title.raw || undefined,
            hideLabels: context.parameters.HideLabel.raw || false,
            data: dataPoints,
        };

        return React.createElement(VerticalStackedBarChart, props);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup if needed
    }
}

const data: VerticalStackedChartProps[] = [
    {
        chartData: [
            {
                data: 1,
                color: "color1",
                legend: "Category A",
                xAxisCalloutData: "A",
                yAxisCalloutData: "10",
                callOutAccessibilityData: { ariaLabel: "Category A, 10" }
            },
            {
                data: 1,
                color: "color2",
                legend: "Category B",
                xAxisCalloutData: "B",
                yAxisCalloutData: "20",
                callOutAccessibilityData: { ariaLabel: "Category B, 20" }
            }
        ],
        xAxisPoint: 0,
        lineData: [
            {
                y: 42,
                legend: "Supported Builds",
                color: "**",
            },
            {
                y: 10,
                legend: "Recommended Builds",
                color: "color17",
            },
         ],
    }
];

// I need a component in powerapps for Getting and Setting Theme preset and use it around the app. 


5.5
0.5

6