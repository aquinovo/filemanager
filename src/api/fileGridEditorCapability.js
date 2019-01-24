import React, { Component } from 'react';

const editPath = "M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z";

const shouldBeAvailableForEditor = function(apiOptions, ref){
    console.log('This shouldBeAvailable forr editor', apiOptions, ref)
    var selectedResources = getSelectedResources();

    return selectedResources.length > 0 && !selectedResources.some(function (r) {
      return r.type === 'dir';
    }) && selectedResources.every(function (r) {
      return r.capabilities.canDownload;
    });
};
const openInFileGridEditor =  function(apiOptions, ref, api){
    let children =  ref.getResourceChildren();
    let firstChild = children[0];
    console.log('Handler for open editor', firstChild.id)
    console.log('Api is ', api)
    return false;
};

const fileGridEditorCapability = function(apiOptions, ref, api){
    var getSelectedResources = ref.getSelectedResources;
    console.log('getResourceChildren', ref.getResourceChildren)
    return {
        id: 'openInFileGridEditor',
        label: 'Edit in grid',
        availableInContexts: ['row', 'toolbar'],
        icon: { svg: `<svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" focusable=\"false\"><path d=\"${editPath}\"/></svg>` },
        shouldBeAvailable: function shouldBeAvailable(apiOptions) {
          var selectedResources = getSelectedResources();

          return selectedResources.length > 0 && !selectedResources.some(function (r) {
            return r.type === 'dir';
          }) && selectedResources.every(function (r) {
            return r.capabilities.canDownload;
          });
        },
        handler: () => openInFileGridEditor(apiOptions, ref, api)
    }
}


export default fileGridEditorCapability;
