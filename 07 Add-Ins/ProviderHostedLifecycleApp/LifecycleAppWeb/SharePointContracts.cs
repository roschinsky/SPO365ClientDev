//------------------------------------------------------------------------------
//
// This file is generated to provide strong typing of the SharePoint types
// used in remote services.
//
// Renaming this file or changing the contents may cause incorrect behavior.
//
//------------------------------------------------------------------------------

namespace LifecycleAppWeb
{
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteEventProperties", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class RemoteEventProperties : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string AccessTokenField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private RemoteAppEventProperties AppEventPropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Guid CorrelationIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int CultureLCIDField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private RemoteEntityEventProperties EntityInstanceEventPropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ErrorCodeField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ErrorMessageField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private RemoteEventType EventTypeField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private RemoteItemEventProperties ItemEventPropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private RemoteListEventProperties ListEventPropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private RemoteSecurityEventProperties SecurityEventPropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int UICultureLCIDField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private RemoteWebEventProperties WebEventPropertiesField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string AccessToken
        {
            get
            {
                return this.AccessTokenField;
            }
            set
            {
                if ((object.ReferenceEquals(this.AccessTokenField, value) != true))
                {
                    this.AccessTokenField = value;
                    this.RaisePropertyChanged("AccessToken");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public RemoteAppEventProperties AppEventProperties
        {
            get
            {
                return this.AppEventPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.AppEventPropertiesField, value) != true))
                {
                    this.AppEventPropertiesField = value;
                    this.RaisePropertyChanged("AppEventProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Guid CorrelationId
        {
            get
            {
                return this.CorrelationIdField;
            }
            set
            {
                if ((this.CorrelationIdField.Equals(value) != true))
                {
                    this.CorrelationIdField = value;
                    this.RaisePropertyChanged("CorrelationId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CultureLCID
        {
            get
            {
                return this.CultureLCIDField;
            }
            set
            {
                if ((this.CultureLCIDField.Equals(value) != true))
                {
                    this.CultureLCIDField = value;
                    this.RaisePropertyChanged("CultureLCID");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public RemoteEntityEventProperties EntityInstanceEventProperties
        {
            get
            {
                return this.EntityInstanceEventPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.EntityInstanceEventPropertiesField, value) != true))
                {
                    this.EntityInstanceEventPropertiesField = value;
                    this.RaisePropertyChanged("EntityInstanceEventProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ErrorCode
        {
            get
            {
                return this.ErrorCodeField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ErrorCodeField, value) != true))
                {
                    this.ErrorCodeField = value;
                    this.RaisePropertyChanged("ErrorCode");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ErrorMessage
        {
            get
            {
                return this.ErrorMessageField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ErrorMessageField, value) != true))
                {
                    this.ErrorMessageField = value;
                    this.RaisePropertyChanged("ErrorMessage");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public RemoteEventType EventType
        {
            get
            {
                return this.EventTypeField;
            }
            set
            {
                if ((this.EventTypeField.Equals(value) != true))
                {
                    this.EventTypeField = value;
                    this.RaisePropertyChanged("EventType");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public RemoteItemEventProperties ItemEventProperties
        {
            get
            {
                return this.ItemEventPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ItemEventPropertiesField, value) != true))
                {
                    this.ItemEventPropertiesField = value;
                    this.RaisePropertyChanged("ItemEventProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public RemoteListEventProperties ListEventProperties
        {
            get
            {
                return this.ListEventPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ListEventPropertiesField, value) != true))
                {
                    this.ListEventPropertiesField = value;
                    this.RaisePropertyChanged("ListEventProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public RemoteSecurityEventProperties SecurityEventProperties
        {
            get
            {
                return this.SecurityEventPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.SecurityEventPropertiesField, value) != true))
                {
                    this.SecurityEventPropertiesField = value;
                    this.RaisePropertyChanged("SecurityEventProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int UICultureLCID
        {
            get
            {
                return this.UICultureLCIDField;
            }
            set
            {
                if ((this.UICultureLCIDField.Equals(value) != true))
                {
                    this.UICultureLCIDField = value;
                    this.RaisePropertyChanged("UICultureLCID");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public RemoteWebEventProperties WebEventProperties
        {
            get
            {
                return this.WebEventPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.WebEventPropertiesField, value) != true))
                {
                    this.WebEventPropertiesField = value;
                    this.RaisePropertyChanged("WebEventProperties");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteAppEventProperties", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class RemoteAppEventProperties : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {

        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Uri AppWebFullUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string AssetIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ContentMarketField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Uri HostWebFullUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Version PreviousVersionField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Guid ProductIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Version VersionField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Uri AppWebFullUrl
        {
            get
            {
                return this.AppWebFullUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.AppWebFullUrlField, value) != true))
                {
                    this.AppWebFullUrlField = value;
                    this.RaisePropertyChanged("AppWebFullUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string AssetId
        {
            get
            {
                return this.AssetIdField;
            }
            set
            {
                if ((object.ReferenceEquals(this.AssetIdField, value) != true))
                {
                    this.AssetIdField = value;
                    this.RaisePropertyChanged("AssetId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ContentMarket
        {
            get
            {
                return this.ContentMarketField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ContentMarketField, value) != true))
                {
                    this.ContentMarketField = value;
                    this.RaisePropertyChanged("ContentMarket");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Uri HostWebFullUrl
        {
            get
            {
                return this.HostWebFullUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.HostWebFullUrlField, value) != true))
                {
                    this.HostWebFullUrlField = value;
                    this.RaisePropertyChanged("HostWebFullUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Version PreviousVersion
        {
            get
            {
                return this.PreviousVersionField;
            }
            set
            {
                if ((object.ReferenceEquals(this.PreviousVersionField, value) != true))
                {
                    this.PreviousVersionField = value;
                    this.RaisePropertyChanged("PreviousVersion");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Guid ProductId
        {
            get
            {
                return this.ProductIdField;
            }
            set
            {
                if ((this.ProductIdField.Equals(value) != true))
                {
                    this.ProductIdField = value;
                    this.RaisePropertyChanged("ProductId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Version Version
        {
            get
            {
                return this.VersionField;
            }
            set
            {
                if ((object.ReferenceEquals(this.VersionField, value) != true))
                {
                    this.VersionField = value;
                    this.RaisePropertyChanged("Version");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteEntityEventProperties", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class RemoteEntityEventProperties : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {

        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string EntityNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string EntityNamespaceField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string LobSystemInstanceNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string NotificationContextField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private byte[] NotificationMessageField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string EntityName
        {
            get
            {
                return this.EntityNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.EntityNameField, value) != true))
                {
                    this.EntityNameField = value;
                    this.RaisePropertyChanged("EntityName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string EntityNamespace
        {
            get
            {
                return this.EntityNamespaceField;
            }
            set
            {
                if ((object.ReferenceEquals(this.EntityNamespaceField, value) != true))
                {
                    this.EntityNamespaceField = value;
                    this.RaisePropertyChanged("EntityNamespace");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string LobSystemInstanceName
        {
            get
            {
                return this.LobSystemInstanceNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.LobSystemInstanceNameField, value) != true))
                {
                    this.LobSystemInstanceNameField = value;
                    this.RaisePropertyChanged("LobSystemInstanceName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string NotificationContext
        {
            get
            {
                return this.NotificationContextField;
            }
            set
            {
                if ((object.ReferenceEquals(this.NotificationContextField, value) != true))
                {
                    this.NotificationContextField = value;
                    this.RaisePropertyChanged("NotificationContext");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public byte[] NotificationMessage
        {
            get
            {
                return this.NotificationMessageField;
            }
            set
            {
                if ((object.ReferenceEquals(this.NotificationMessageField, value) != true))
                {
                    this.NotificationMessageField = value;
                    this.RaisePropertyChanged("NotificationMessage");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteItemEventProperties", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class RemoteItemEventProperties : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {

        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Collections.Generic.Dictionary<string, object> AfterPropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string AfterUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Collections.Generic.Dictionary<string, object> BeforePropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string BeforeUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int CurrentUserIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private byte[] ExternalNotificationMessageField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private bool IsBackgroundSaveField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Guid ListIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int ListItemIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ListTitleField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string UserDisplayNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string UserLoginNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private bool VersionlessField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string WebUrlField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Collections.Generic.Dictionary<string, object> AfterProperties
        {
            get
            {
                return this.AfterPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.AfterPropertiesField, value) != true))
                {
                    this.AfterPropertiesField = value;
                    this.RaisePropertyChanged("AfterProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string AfterUrl
        {
            get
            {
                return this.AfterUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.AfterUrlField, value) != true))
                {
                    this.AfterUrlField = value;
                    this.RaisePropertyChanged("AfterUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Collections.Generic.Dictionary<string, object> BeforeProperties
        {
            get
            {
                return this.BeforePropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.BeforePropertiesField, value) != true))
                {
                    this.BeforePropertiesField = value;
                    this.RaisePropertyChanged("BeforeProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string BeforeUrl
        {
            get
            {
                return this.BeforeUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.BeforeUrlField, value) != true))
                {
                    this.BeforeUrlField = value;
                    this.RaisePropertyChanged("BeforeUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CurrentUserId
        {
            get
            {
                return this.CurrentUserIdField;
            }
            set
            {
                if ((this.CurrentUserIdField.Equals(value) != true))
                {
                    this.CurrentUserIdField = value;
                    this.RaisePropertyChanged("CurrentUserId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public byte[] ExternalNotificationMessage
        {
            get
            {
                return this.ExternalNotificationMessageField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ExternalNotificationMessageField, value) != true))
                {
                    this.ExternalNotificationMessageField = value;
                    this.RaisePropertyChanged("ExternalNotificationMessage");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public bool IsBackgroundSave
        {
            get
            {
                return this.IsBackgroundSaveField;
            }
            set
            {
                if ((this.IsBackgroundSaveField.Equals(value) != true))
                {
                    this.IsBackgroundSaveField = value;
                    this.RaisePropertyChanged("IsBackgroundSave");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Guid ListId
        {
            get
            {
                return this.ListIdField;
            }
            set
            {
                if ((this.ListIdField.Equals(value) != true))
                {
                    this.ListIdField = value;
                    this.RaisePropertyChanged("ListId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int ListItemId
        {
            get
            {
                return this.ListItemIdField;
            }
            set
            {
                if ((this.ListItemIdField.Equals(value) != true))
                {
                    this.ListItemIdField = value;
                    this.RaisePropertyChanged("ListItemId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ListTitle
        {
            get
            {
                return this.ListTitleField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ListTitleField, value) != true))
                {
                    this.ListTitleField = value;
                    this.RaisePropertyChanged("ListTitle");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string UserDisplayName
        {
            get
            {
                return this.UserDisplayNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.UserDisplayNameField, value) != true))
                {
                    this.UserDisplayNameField = value;
                    this.RaisePropertyChanged("UserDisplayName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string UserLoginName
        {
            get
            {
                return this.UserLoginNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.UserLoginNameField, value) != true))
                {
                    this.UserLoginNameField = value;
                    this.RaisePropertyChanged("UserLoginName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public bool Versionless
        {
            get
            {
                return this.VersionlessField;
            }
            set
            {
                if ((this.VersionlessField.Equals(value) != true))
                {
                    this.VersionlessField = value;
                    this.RaisePropertyChanged("Versionless");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string WebUrl
        {
            get
            {
                return this.WebUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.WebUrlField, value) != true))
                {
                    this.WebUrlField = value;
                    this.RaisePropertyChanged("WebUrl");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteListEventProperties", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class RemoteListEventProperties : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {

        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Guid FeatureIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string FieldNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string FieldXmlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Guid ListIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ListTitleField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int TemplateIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string WebUrlField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Guid FeatureId
        {
            get
            {
                return this.FeatureIdField;
            }
            set
            {
                if ((this.FeatureIdField.Equals(value) != true))
                {
                    this.FeatureIdField = value;
                    this.RaisePropertyChanged("FeatureId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string FieldName
        {
            get
            {
                return this.FieldNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.FieldNameField, value) != true))
                {
                    this.FieldNameField = value;
                    this.RaisePropertyChanged("FieldName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string FieldXml
        {
            get
            {
                return this.FieldXmlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.FieldXmlField, value) != true))
                {
                    this.FieldXmlField = value;
                    this.RaisePropertyChanged("FieldXml");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Guid ListId
        {
            get
            {
                return this.ListIdField;
            }
            set
            {
                if ((this.ListIdField.Equals(value) != true))
                {
                    this.ListIdField = value;
                    this.RaisePropertyChanged("ListId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ListTitle
        {
            get
            {
                return this.ListTitleField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ListTitleField, value) != true))
                {
                    this.ListTitleField = value;
                    this.RaisePropertyChanged("ListTitle");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int TemplateId
        {
            get
            {
                return this.TemplateIdField;
            }
            set
            {
                if ((this.TemplateIdField.Equals(value) != true))
                {
                    this.TemplateIdField = value;
                    this.RaisePropertyChanged("TemplateId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string WebUrl
        {
            get
            {
                return this.WebUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.WebUrlField, value) != true))
                {
                    this.WebUrlField = value;
                    this.RaisePropertyChanged("WebUrl");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteSecurityEventProperties", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class RemoteSecurityEventProperties : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {

        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int GroupIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string GroupNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int GroupNewOwnerIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int GroupOwnerIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int GroupUserIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string GroupUserLoginNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int ObjectTypeField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int PrincipalIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int RoleDefinitionIdField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string RoleDefinitionNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private ulong RoleDefinitionPermissionsField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ScopeUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string UserDisplayNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string UserLoginNameField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string WebFullUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Guid WebIdField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int GroupId
        {
            get
            {
                return this.GroupIdField;
            }
            set
            {
                if ((this.GroupIdField.Equals(value) != true))
                {
                    this.GroupIdField = value;
                    this.RaisePropertyChanged("GroupId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string GroupName
        {
            get
            {
                return this.GroupNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.GroupNameField, value) != true))
                {
                    this.GroupNameField = value;
                    this.RaisePropertyChanged("GroupName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int GroupNewOwnerId
        {
            get
            {
                return this.GroupNewOwnerIdField;
            }
            set
            {
                if ((this.GroupNewOwnerIdField.Equals(value) != true))
                {
                    this.GroupNewOwnerIdField = value;
                    this.RaisePropertyChanged("GroupNewOwnerId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int GroupOwnerId
        {
            get
            {
                return this.GroupOwnerIdField;
            }
            set
            {
                if ((this.GroupOwnerIdField.Equals(value) != true))
                {
                    this.GroupOwnerIdField = value;
                    this.RaisePropertyChanged("GroupOwnerId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int GroupUserId
        {
            get
            {
                return this.GroupUserIdField;
            }
            set
            {
                if ((this.GroupUserIdField.Equals(value) != true))
                {
                    this.GroupUserIdField = value;
                    this.RaisePropertyChanged("GroupUserId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string GroupUserLoginName
        {
            get
            {
                return this.GroupUserLoginNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.GroupUserLoginNameField, value) != true))
                {
                    this.GroupUserLoginNameField = value;
                    this.RaisePropertyChanged("GroupUserLoginName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int ObjectType
        {
            get
            {
                return this.ObjectTypeField;
            }
            set
            {
                if ((this.ObjectTypeField.Equals(value) != true))
                {
                    this.ObjectTypeField = value;
                    this.RaisePropertyChanged("ObjectType");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int PrincipalId
        {
            get
            {
                return this.PrincipalIdField;
            }
            set
            {
                if ((this.PrincipalIdField.Equals(value) != true))
                {
                    this.PrincipalIdField = value;
                    this.RaisePropertyChanged("PrincipalId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public int RoleDefinitionId
        {
            get
            {
                return this.RoleDefinitionIdField;
            }
            set
            {
                if ((this.RoleDefinitionIdField.Equals(value) != true))
                {
                    this.RoleDefinitionIdField = value;
                    this.RaisePropertyChanged("RoleDefinitionId");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string RoleDefinitionName
        {
            get
            {
                return this.RoleDefinitionNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.RoleDefinitionNameField, value) != true))
                {
                    this.RoleDefinitionNameField = value;
                    this.RaisePropertyChanged("RoleDefinitionName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public ulong RoleDefinitionPermissions
        {
            get
            {
                return this.RoleDefinitionPermissionsField;
            }
            set
            {
                if ((this.RoleDefinitionPermissionsField.Equals(value) != true))
                {
                    this.RoleDefinitionPermissionsField = value;
                    this.RaisePropertyChanged("RoleDefinitionPermissions");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ScopeUrl
        {
            get
            {
                return this.ScopeUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ScopeUrlField, value) != true))
                {
                    this.ScopeUrlField = value;
                    this.RaisePropertyChanged("ScopeUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string UserDisplayName
        {
            get
            {
                return this.UserDisplayNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.UserDisplayNameField, value) != true))
                {
                    this.UserDisplayNameField = value;
                    this.RaisePropertyChanged("UserDisplayName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string UserLoginName
        {
            get
            {
                return this.UserLoginNameField;
            }
            set
            {
                if ((object.ReferenceEquals(this.UserLoginNameField, value) != true))
                {
                    this.UserLoginNameField = value;
                    this.RaisePropertyChanged("UserLoginName");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string WebFullUrl
        {
            get
            {
                return this.WebFullUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.WebFullUrlField, value) != true))
                {
                    this.WebFullUrlField = value;
                    this.RaisePropertyChanged("WebFullUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Guid WebId
        {
            get
            {
                return this.WebIdField;
            }
            set
            {
                if ((this.WebIdField.Equals(value) != true))
                {
                    this.WebIdField = value;
                    this.RaisePropertyChanged("WebId");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteWebEventProperties", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class RemoteWebEventProperties : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {

        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string FullUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string NewServerRelativeUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ServerRelativeUrlField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string FullUrl
        {
            get
            {
                return this.FullUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.FullUrlField, value) != true))
                {
                    this.FullUrlField = value;
                    this.RaisePropertyChanged("FullUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string NewServerRelativeUrl
        {
            get
            {
                return this.NewServerRelativeUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.NewServerRelativeUrlField, value) != true))
                {
                    this.NewServerRelativeUrlField = value;
                    this.RaisePropertyChanged("NewServerRelativeUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ServerRelativeUrl
        {
            get
            {
                return this.ServerRelativeUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ServerRelativeUrlField, value) != true))
                {
                    this.ServerRelativeUrlField = value;
                    this.RaisePropertyChanged("ServerRelativeUrl");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "RemoteEventType", Namespace = "http://schemas.datacontract.org/2004/07/Microsoft.SharePoint.Test")]
    public enum RemoteEventType : int
    {

        [System.Runtime.Serialization.EnumMemberAttribute()]
        AppInstalled = 10701,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        AppUpgraded = 10702,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        AppUninstalling = 10703,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemAdding = 1,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemUpdating = 2,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemDeleting = 3,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemCheckingIn = 4,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemCheckingOut = 5,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemUncheckingOut = 6,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemAttachmentAdding = 7,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemAttachmentDeleting = 8,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemFileMoving = 9,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        FieldAdding = 101,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        FieldUpdating = 102,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        FieldDeleting = 103,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ListAdding = 104,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ListDeleting = 105,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        SiteDeleting = 201,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        WebDeleting = 202,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        WebMoving = 203,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        WebAdding = 204,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupAdding = 301,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupUpdating = 302,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupDeleting = 303,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupUserAdding = 304,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupUserDeleting = 305,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleDefinitionAdding = 306,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleDefinitionUpdating = 307,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleDefinitionDeleting = 308,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleAssignmentAdding = 309,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleAssignmentDeleting = 310,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        InheritanceBreaking = 311,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        InheritanceResetting = 312,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemAdded = 10001,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemUpdated = 10002,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemDeleted = 10003,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemCheckedIn = 10004,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemCheckedOut = 10005,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemUncheckedOut = 10006,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemAttachmentAdded = 10007,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemAttachmentDeleted = 10008,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemFileMoved = 10009,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ItemFileConverted = 10010,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        FieldAdded = 10101,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        FieldUpdated = 10102,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        FieldDeleted = 10103,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ListAdded = 10104,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        ListDeleted = 10105,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        SiteDeleted = 10201,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        WebDeleted = 10202,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        WebMoved = 10203,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        WebProvisioned = 10204,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        EntityInstanceAdded = 10601,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        EntityInstanceUpdated = 10602,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        EntityInstanceDeleted = 10603,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupAdded = 10301,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupUpdated = 10302,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupDeleted = 10303,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupUserAdded = 10304,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        GroupUserDeleted = 10305,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleDefinitionAdded = 10306,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleDefinitionUpdated = 10307,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleDefinitionDeleted = 10308,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleAssignmentAdded = 10309,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        RoleAssignmentDeleted = 10310,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        InheritanceBroken = 10311,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        InheritanceReset = 10312,
    }

    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "SPRemoteEventResult", Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/")]
    [System.SerializableAttribute()]
    public partial class SPRemoteEventResult : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged
    {

        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private System.Collections.Generic.Dictionary<string, object> ChangedItemPropertiesField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ErrorMessageField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string RedirectUrlField;

        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private SPRemoteEventServiceStatus StatusField;

        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Collections.Generic.Dictionary<string, object> ChangedItemProperties
        {
            get
            {
                return this.ChangedItemPropertiesField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ChangedItemPropertiesField, value) != true))
                {
                    this.ChangedItemPropertiesField = value;
                    this.RaisePropertyChanged("ChangedItemProperties");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ErrorMessage
        {
            get
            {
                return this.ErrorMessageField;
            }
            set
            {
                if ((object.ReferenceEquals(this.ErrorMessageField, value) != true))
                {
                    this.ErrorMessageField = value;
                    this.RaisePropertyChanged("ErrorMessage");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public string RedirectUrl
        {
            get
            {
                return this.RedirectUrlField;
            }
            set
            {
                if ((object.ReferenceEquals(this.RedirectUrlField, value) != true))
                {
                    this.RedirectUrlField = value;
                    this.RaisePropertyChanged("RedirectUrl");
                }
            }
        }

        [System.Runtime.Serialization.DataMemberAttribute()]
        public SPRemoteEventServiceStatus Status
        {
            get
            {
                return this.StatusField;
            }
            set
            {
                if ((this.StatusField.Equals(value) != true))
                {
                    this.StatusField = value;
                    this.RaisePropertyChanged("Status");
                }
            }
        }

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged(string propertyName)
        {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null))
            {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }

    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name = "SPRemoteEventServiceStatus", Namespace = "http://schemas.datacontract.org/2004/07/Microsoft.SharePoint.Test")]
    public enum SPRemoteEventServiceStatus : int
    {

        [System.Runtime.Serialization.EnumMemberAttribute()]
        Continue = 0,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        CancelNoError = 1,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        CancelWithError = 2,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        CancelWithRedirectUrl = 3,
    }

    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(Namespace = "http://schemas.microsoft.com/sharepoint/remoteapp/", ConfigurationName = "LifecycleAppWeb.IRemoteEventService")]
    public interface IRemoteEventService
    {

        [System.ServiceModel.OperationContractAttribute(Action = "http://schemas.microsoft.com/sharepoint/remoteapp/IRemoteEventService/ProcessEven" +
            "t", ReplyAction = "http://schemas.microsoft.com/sharepoint/remoteapp/IRemoteEventService/ProcessEven" +
            "tResponse")]
        SPRemoteEventResult ProcessEvent(RemoteEventProperties properties);

        [System.ServiceModel.OperationContractAttribute(IsOneWay = true, Action = "http://schemas.microsoft.com/sharepoint/remoteapp/IRemoteEventService/ProcessOneW" +
            "ayEvent")]
        void ProcessOneWayEvent(RemoteEventProperties properties);
    }
}