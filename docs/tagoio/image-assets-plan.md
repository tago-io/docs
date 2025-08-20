# Image Assets Documentation

This document catalogs all the images referenced in the TagoIO documentation and provides a plan for organizing them.

## Image Sources from Original Documentation

### From MQTT Integration Article
1. **MQTT Architecture Diagram**
   - Source: `https://help.tago.io/galleryDocuments/edbsn6c1522f9148bce1f6b3d30a9ddc3e97b01e4e7a8e6a53fda738010b72ab9e42adac771ff93e2c7dabfe97cb7adf5d3c4?inline=true`
   - Target: `/static/img/tagoio/devices/mqtt-architecture.png`
   - Description: Shows MQTT broker workflow and data flow

2. **MQTT Data Flow Diagram**
   - Source: `https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/jY_tt6ovlFWZRT51haba2vDA4Xa3VUtXjlbSQZgwVWU/1623783352697-6ok.png`
   - Target: `/static/img/tagoio/devices/mqtt-data-flow.png`
   - Description: TagoIO data flow process

3. **Live Inspector MQTT Connection**
   - Source: `https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/J4NvXqv-YUhICknGr5obSqDkzozW7_TOB8GAMc3yj8I/1623782776109-ato.png`
   - Target: `/static/img/tagoio/devices/live-inspector-mqtt.png`
   - Description: Live Inspector showing MQTT connection

4. **MQTT Action Configuration**
   - Source: `https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/kFXGnLerEvBJmYPqPkkUVmVB5gMsyXrP44Sx-ih4-7I/1623782574993-Bio.png`
   - Target: `/static/img/tagoio/devices/mqtt-action-config.png`
   - Description: MQTT action configuration interface

5. **MQTT Data Storage Verification**
   - Source: `https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/exEdD7taToU7RUxg3ZLF30uITNgGunJ4PtFcr_xo_7Q/1623782908938-ObE.png`
   - Target: `/static/img/tagoio/devices/mqtt-data-storage.png`
   - Description: Live Inspector showing stored MQTT data

### From Device Documentation
6. **Device Storage Types**
   - Source: `https://help.tago.io/galleryDocuments/edbsn12859d289e036dc1fd1178598fea7a1d1e5f0169b049fcc4660fde99d6bca06b3b13ed20ccb2d15b61c9d764ebf671e0?inline=true`
   - Target: `/static/img/tagoio/devices/storage-types.png`
   - Description: Comparison of immutable vs mutable storage

7. **Device General Information**
   - Source: `https://help.tago.io/galleryDocuments/edbsna665efda8e5c113aa8451fe8046a25db041d65f6c1f5f34b1479e8b7dfa12b737c831c8e038704b3423b8435ee905a43?inline=true`
   - Target: `/static/img/tagoio/devices/device-general-info.png`
   - Description: Device general information interface

8. **Payload Parser Interface**
   - Source: `https://help.tago.io/galleryDocuments/edbsn12859d289e036dc1fd1178598fea7a1d0ba3bd2bc0b30181bba76a988338cb714c315b63fbb852887743c2f51ff0620a?inline=true`
   - Target: `/static/img/tagoio/devices/payload-parser.png`
   - Description: Payload parser configuration interface

### From Custom Widget Documentation
9. **Custom Widget Examples (GIF 1)**
   - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/p4L36LTMKA3ZFBq2vBSIIZQ8mYHUbl_bmgYi_0JnK8I/Apr-28-2020%2008-23-01-3Sg.gif`
   - Target: `/static/img/tagoio/widgets/custom-widget-demo-1.gif`
   - Description: Interactive custom widget demonstration

10. **Custom Widget Examples (GIF 2)**
    - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/Xh0wxJm9ozh-1noSfAptEx-heNnCgpFT1aTVDG3Ly2k/Apr-28-2020%2008-32-38-vww.gif`
    - Target: `/static/img/tagoio/widgets/custom-widget-demo-2.gif`
    - Description: Advanced widget interactions

11. **Custom Widget Examples (GIF 3)**
    - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/MbA0dqVNRzmfkjh_8KXFvhmyPaZ-J-gGc3wsX4Pk5KU/Apr-28-2020%2008-37-46-uoU.gif`
    - Target: `/static/img/tagoio/widgets/custom-widget-demo-3.gif`
    - Description: Complex widget functionality

12. **Widget Interface Examples**
    - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/c-iprudK3_wCBz73fsXTDnIYAHWQVxR3FkuSNmqTjNk/1588077846724-H1g.png`
    - Target: `/static/img/tagoio/widgets/widget-interfaces.png`
    - Description: Various widget interface examples

13. **Widget Dashboard Integration**
    - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/3Wmy3XyADW0JHdV1mgTUzrwyCOWINmybs346azNqg9I/1588077887315-0-0.png`
    - Target: `/static/img/tagoio/widgets/dashboard-integration.png`
    - Description: Widgets integrated in dashboard

14. **Data Source Configuration**
    - Source: `https://help.tago.io/galleryDocuments/edbsn99fa6052994c1dd954f66185e4542a68e8302ff3d10035d63a0f314e95709846866f70e8736df778854a3634f3f1b879?inline=true`
    - Target: `/static/img/tagoio/widgets/data-source-config.png`
    - Description: Widget data source configuration

15. **Widget Configuration Interface**
    - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/zjITxZFTJZzHrqEwXggbqp7nYoVmd0VbgUvQV1o_820/1588017173880-8JY.png`
    - Target: `/static/img/tagoio/widgets/widget-config.png`
    - Description: Main widget configuration interface

16. **Parameters Configuration**
    - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/QP_FcaGOr9ZlQ7ABwGw1yO6iVgC_nGlcdmiZ9Wl3XIw/1587658883225-xaM.png`
    - Target: `/static/img/tagoio/widgets/parameters-config.png`
    - Description: Widget parameters configuration

17. **Analysis Integration**
    - Source: `https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/dE6Cbd_y-emRHP921bYPJtEAKLyVFhCHgH-QxmNYvZs/1587659332760-NCM.png`
    - Target: `/static/img/tagoio/widgets/analysis-integration.png`
    - Description: Widget analysis integration settings

## Image Organization Plan

### Directory Structure
```
static/img/tagoio/
├── devices/
│   ├── mqtt-architecture.png
│   ├── mqtt-data-flow.png
│   ├── live-inspector-mqtt.png
│   ├── mqtt-action-config.png
│   ├── mqtt-data-storage.png
│   ├── storage-types.png
│   ├── device-general-info.png
│   └── payload-parser.png
├── widgets/
│   ├── custom-widget-demo-1.gif
│   ├── custom-widget-demo-2.gif
│   ├── custom-widget-demo-3.gif
│   ├── widget-interfaces.png
│   ├── dashboard-integration.png
│   ├── data-source-config.png
│   ├── widget-config.png
│   ├── parameters-config.png
│   └── analysis-integration.png
├── dashboards/
│   └── (future dashboard-specific images)
├── api/
│   └── (future API-specific images)
└── tutorials/
    └── (future tutorial-specific images)
```

## Implementation Strategy

### Phase 1: Critical Images (High Priority)
1. Device storage types diagram
2. MQTT architecture and data flow
3. Basic widget configuration interfaces

### Phase 2: Demo and Example Images (Medium Priority)
1. Custom widget demonstrations (GIFs)
2. Interface screenshots
3. Configuration examples

### Phase 3: Enhancement Images (Low Priority)
1. Additional tutorial images
2. API documentation visuals
3. Advanced configuration screenshots

## Markdown Updates Required

After downloading images, update the following files:

### Device Documentation
- `devices/mqtt-integration.md`: Update 5 image references
- `devices/devices-comprehensive.md`: Update 3 image references

### Widget Documentation
- `widgets/custom-widget-development.md`: Update 9 image references

### Dashboard Documentation
- Future updates as images are added

## Image Optimization

### Recommended Formats
- **Screenshots**: PNG for clarity
- **Diagrams**: SVG when possible, PNG as fallback
- **Demonstrations**: GIF for small animations, MP4 for longer videos
- **Icons**: SVG preferred

### Size Guidelines
- **Max width**: 800px for documentation images
- **Quality**: Optimize for web while maintaining readability
- **Alt text**: Provide meaningful descriptions for accessibility

## Accessibility Considerations

### Alt Text Requirements
- Descriptive text for all images
- Explanation of diagram content
- Context for interface screenshots

### Image Captions
- Provide captions for complex diagrams
- Include figure numbers for reference
- Explain purpose and context

---

**Note**: Images should be downloaded manually or through scripts to avoid copyright issues. Always respect source licensing and attribution requirements.