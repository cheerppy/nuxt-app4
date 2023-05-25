import { describe, expect, it, vi } from "vitest";
import { reactive } from "vue";
import { mount } from "@vue/test-utils";
import App from "app.vue";

const useStateMock = vi.fn(() => reactive<{ state: Record<string, any> }>({
    state: {},
}).state)
vi.stubGlobal("useState", useStateMock)
const wrapper = mount(App)

describe("app", () => {
    it('render hello', () => {
        expect(wrapper.html()).toContain("Hi, vue")
    })
})

describe('button', () => {
    it('calls onClick on click', async () => {
        wrapper.vm.state.value = { counter: 0 }
        expect(wrapper.vm.state.value.counter).toBe(0)
        await wrapper.findAll("button")[0].trigger("click")
        expect(wrapper.vm.state.value.counter).toBe(1)
    })
    it('calls reset', async () => {
        await wrapper.findAll("button")[1].trigger("click")
        expect(wrapper.vm.state.value.counter).toBe(0)
    })
})

