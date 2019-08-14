import { mount, shallowMount } from "@vue/test-utils";
import Component from "./index";

describe("ProductPresentation", () => {
    test("является экземпляром Vue", () => {
        const wrapper = mount(Component);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
    test("содержит p-product в классах у root элемента", () => {
        const wrapper = mount(Component);
        expect(wrapper.classes("p-product")).toBe(true);
    });
    describe("содержит необходимые насройки props", () => {
        test("вариант инициализация", () => {
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: null,
                    isLoading: false,
                    isError: false,
                    errorMessage: ""
                }
            });
            expect(wrapper.vm.item).toBe(null);
            expect(wrapper.vm.isLoading).toBe(false);
            expect(wrapper.vm.isError).toBe(false);
            expect(wrapper.vm.errorMessage).toBe("");
        });
        test("вариант загрузки данных", () => {
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: null,
                    isLoading: true,
                    isError: false,
                    errorMessage: ""
                }
            });
            expect(wrapper.vm.isLoading).toBe(true);
        });
        test("вариант наличия данных", () => {
            const item = {};
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: item,
                    isLoading: false,
                    isError: false,
                    errorMessage: ""
                }
            });
            expect(wrapper.vm.item).toBe(item);
        });
        test("вариант наличия ошибки", () => {
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: null,
                    isLoading: false,
                    isError: true,
                    errorMessage: "Текст ошибки"
                }
            });
            expect(wrapper.vm.isError).toBe(true);
            expect(wrapper.vm.errorMessage).toBe("Текст ошибки");
        });
    });
    describe("содержит необходимые элементы", () => {
        test("Показывает карточка товара при наличии item", () => {
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: {},
                    isLoading: false,
                    isError: false,
                    errorMessage: ""
                }
            });
            expect(wrapper.contains(".p-product__card")).toBe(true);
        });
        test("Показывает лоадер при загрузке данных", () => {
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: null,
                    isLoading: true,
                    isError: false,
                    errorMessage: ""
                }
            });
            expect(wrapper.contains(".p-product__loader")).toBe(true);
        });
        test("Показывает ошибку с необходимым текстом при ошибке загрузки данных", () => {
            const errorMessage = "текст ошибки";
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: null,
                    isLoading: true,
                    isError: true,
                    errorMessage: errorMessage,
                }
            });
            const errorElement = wrapper.find(".p-product__error");
            expect(errorElement.is(".p-product__error")).toBe(true);
            expect(errorElement.html().indexOf(errorMessage) !== -1).toBe(true);
        });
        test("Если ошибка передачи данных, то должна быть кнопка повторного запроса данных", () => {
            const errorMessage = "текст ошибки";
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: null,
                    isLoading: true,
                    isError: true,
                    errorMessage: errorMessage,
                }
            });
            const btn = wrapper.find(".p-product__fetch-data");
            expect(btn.is(".p-product__fetch-data")).toBe(true);
        });
    });
    describe("корректно обрабатывает клики по элементам", () => {
        test("клик по кнопке 'запросить данные' или подобные, должны вызывать emit('fetchData')", () => {
            const wrapper = shallowMount(Component, {
                propsData: {
                    item: null,
                    isLoading: false,
                    isError: true,
                    errorMessage: "Текст ошибки"
                }
            });
            const btn = wrapper.find(".p-product__fetch-data");
            btn.trigger("click");
            expect(wrapper.emitted().fetchData).toBeTruthy();
        });
    });
});
