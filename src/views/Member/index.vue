<script setup>
import { UserOutlined, ArrowDownOutlined, CheckCircleOutlined  } from '@ant-design/icons-vue';
import { useUserStore } from '@/store/user';
import { computed } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const userStore = useUserStore()
const isDarkTheme = computed(() => userStore.isDarkTheme)
</script>
<template>
    <h1 class="fw-bold text-center font-bold text-2xl my-5">{{ t('member') }}</h1>
        <a-tabs v-model:activeKey="activeKey" animated class="text-black px-2" :class="{'text-white': isDarkTheme}">
    <a-tab-pane key="1" :tab="$t('search_order')" class="text-center">
      <li class="text-white font-bold bg-green w-[100px] mx-auto my-3">{{ t('order_placed') }}</li><ArrowDownOutlined />
      <li class="my-3 font-bold">{{ t('shipped') }}</li><ArrowDownOutlined />
      <li class="my-3 font-bold">{{ t('arrived_logistics') }}</li><ArrowDownOutlined />
      <li class="my-3 font-bold">{{ t('arrive_designated') }}</li><ArrowDownOutlined />
      <li class="my-3 font-bold">{{ t('order_completed') }}</li><CheckCircleOutlined class="mb-4"/>
    </a-tab-pane>
    <a-tab-pane key="2" :tab="$t('member_info')">
      <div class="text-center mb-4">
      <a-avatar :size="64">
      <template #icon><UserOutlined /></template>
      </a-avatar>
      <h1 class="font-bold">{{ t('profile') }}</h1><button class="text-blue-500 font-bold">{{ t('upload_photo') }}</button>
      <p class="mt-4">{{ t('username') }}: xxx</p>
      <span>{{ t('name') }}:</span><input type="text"  class="border-2 rounded ml-2 mt-1 text-black"><br>
      <span>{{ t('cellphone') }}:</span><input type="text"  class="border-2 rounded ml-2 mt-1 text-black"><br>
      <span>{{ t('address') }}:</span><input type="text"  class="border-2 rounded ml-2 mt-1 text-black"><br>
        <span>{{ t('email') }}:</span><input type="text"  class="border-2 rounded ml-2 mt-1 text-black"><br><br>
        <button class="bg-black text-white rounded w-16">{{ t('submit') }}</button>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>