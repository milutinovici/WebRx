﻿module wx {
    "use strict";

    /// <summary>
    /// Interface registry to be used with IUnknown.queryInterface
    /// </summary>
    export class IID {
        static IDisposable = "IDisposable";
        static IObservableProperty = "IObservableProperty";
        static IObservableList = "IObservableList";
        static ICommand = "ICommand";
        static IHandleObservableErrors = "IHandleObservableErrors";
    }
}
