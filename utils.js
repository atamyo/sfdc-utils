({
    /**
     * Helper methods to toggle markup visibility
     * (via aura:id and SLDS visibility class toggling)
     */
 
    /* Shows components and elements, given an array of their aura:id strings */
    showComponents : function(component, componentNames) {
        let cmps = this.getComponents(component, componentNames);
        for (let cmp of cmps) {
            $A.util.removeClass(cmp, 'slds-hide');
            $A.util.addClass(cmp, 'slds-show');
        }
    },
    /* Hides components and elements, given an array of their aura:id strings */
    hideComponents : function(component, componentNames) {
        let cmps = this.getComponents(component, componentNames);
        for (let cmp of cmps) {
            $A.util.removeClass(cmp, 'slds-show');
            $A.util.addClass(cmp, 'slds-hide');
        }
    },
    /* Returns an array of components and elements, given an array of their aura:id strings */
    getComponents : function(component, componentNames) {
        let cmps = [];
        for (let componentName of componentNames) {
            let cmp = component.find(componentName);
            if (cmp) {
                if ($A.util.isArray(cmp)) {
                    cmps = cmps.concat(cmp); // ensures found components and elements with the same aura:id are pushed to cmps[] as individual elements, not as elements of a subarray
                }
                else {
                    cmps.push(cmp);
                }
            }
        }
        return cmps;
    }
})