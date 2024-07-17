public without sharing class ManagedContentController {
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getContent(
        String contentKey
    ) {
        try {
            String networkId = Network.getNetworkId();
            ConnectApi.ManagedContentDeliveryDocument contentBody = ConnectApi.ManagedContentDelivery.getManagedContentForSite (
                '0DMaj00000059fN',
                contentKey,
                false
            );
            return contentBody.contentBody;
        } catch (ConnectApi.ConnectApiException e) {
            System.debug('Error Message : ' + e);
            Map<String, ConnectApi.ManagedContentNodeValue> mcnvMap = new Map<String, ConnectApi.ManagedContentNodeValue>();
            return mcnvMap;
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<ConnectApi.ManagedContentVersion> getContentList(
        Integer page,
        Integer pageSize,
        String language,
        String filterby
    ) {
        try {
            String networkId = Network.getNetworkId();
            ConnectApi.ManagedContentVersionCollection contentCollection = ConnectApi.ManagedContent.getAllManagedContent(
                networkId,
                page,
                pageSize,
                language,
                filterby
            );
            return contentCollection.items;
        } catch (ConnectApi.ConnectApiException e) {
            System.debug('Error Message : ' + e);
            List<ConnectApi.ManagedContentVersion> mcnvMap = new List<ConnectApi.ManagedContentVersion>();
            return mcnvMap;
        }
    }
}