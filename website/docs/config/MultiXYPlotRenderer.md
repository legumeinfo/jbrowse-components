---
id: multixyplotrenderer
title: MultiXYPlotRenderer
---

Note: this document is automatically generated from configuration objects in our
source code. See [Config guide](/docs/config_guide) for more info

Also note: this document represents the config API for the current released
version of jbrowse. If you are not using the current version, please cross
reference the markdown files in our repo of the checked out git tag

## Links

[Source code](https://github.com/GMOD/jbrowse-components/blob/main/plugins/wiggle/src/MultiXYPlotRenderer/configSchema.ts)

[GitHub page](https://github.com/GMOD/jbrowse-components/tree/main/website/docs/config/MultiXYPlotRenderer.md)

## Docs

### MultiXYPlotRenderer - Slots

#### slot: filled

```js
filled: {
      type: 'boolean',
      defaultValue: true,
    }
```

#### slot: displayCrossHatches

```js
displayCrossHatches: {
      type: 'boolean',
      description: 'choose to draw cross hatches (sideways lines)',
      defaultValue: false,
    }
```

#### slot: summaryScoreMode

```js
summaryScoreMode: {
      type: 'stringEnum',
      model: types.enumeration('Score type', ['max', 'min', 'avg', 'whiskers']),
      description:
        'choose whether to use max/min/average or whiskers which combines all three into the same rendering',
      defaultValue: 'avg',
    }
```

#### slot: minSize

```js
minSize: {
      type: 'number',
      defaultValue: 0.7,
    }
```

### MultiXYPlotRenderer - Derives from

```js
baseConfiguration: baseWiggleRendererConfigSchema
```
