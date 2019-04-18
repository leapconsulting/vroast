/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp Template {
export function createSingleVmVAppOvfDescriptor(virtualSystemId?: string, virtualSystemName?: string, virtualSystemType?: string, numberOfCpu?: number, memorySizeMB?: number, osType?: vCloud.GuestOSType, deploymentLeaseInSeconds?: number, storageLeaseInSeconds?: number): any {var envelope = new VclEnvelope();
var envelopeSections = envelope.section;

envelope.references = new VclOvfReferences();

// create a network section
var networkSection = new VclNetworkSection();
networkSection.info = com.vmware.library.vCloud.common.createOvfMsg(null, "The list of logical networks");
envelopeSections.add(networkSection);

// create a customization section
var customizationSection = new VclCustomizationSection();
customizationSection.info = com.vmware.library.vCloud.common.createOvfMsg(null, "VApp template customization section");
customizationSection.required = false;
customizationSection.customizeOnInstantiate = true;
envelopeSections.add(customizationSection);

// create a network config section
var networkConfigSection = new VclNetworkConfigSection();
networkConfigSection.info = com.vmware.library.vCloud.common.createOvfMsg(null, "The configuration parameters for logical networks");
networkConfigSection.required = false;
envelopeSections.add(networkConfigSection);

// create a lease settings section
var leaseSettingsSection = new VclLeaseSettingsSection();
leaseSettingsSection.info = com.vmware.library.vCloud.common.createOvfMsg(null, "Lease settings section");
leaseSettingsSection.required = false
leaseSettingsSection.deploymentLeaseInSeconds = deploymentLeaseInSeconds;
leaseSettingsSection.storageLeaseInSeconds = storageLeaseInSeconds;
envelopeSections.add(leaseSettingsSection);

// create a virtual system content
var virtualSystem = new VclVirtualSystem();
var virtualSystemSections = virtualSystem.section;
virtualSystem.id = virtualSystemId;
virtualSystem.name = new VclMsg();
virtualSystem.name.value = virtualSystemName;
virtualSystem.info = com.vmware.library.vCloud.common.createOvfMsg(null, "A virtual machine: A virtual machine");

// create OS section
var osSection = new VclOperatingSystemSection();
osSection.info = com.vmware.library.vCloud.common.createOvfMsg(null, "Specifies the operating system installed");
osSection.id = 1;
osSection.description = new VclMsg();
osSection.description.value = osType.description;
osSection.otherAttributes.put(VclMiscObjectFactory.createQName("osType", "http://www.vmware.com/schema/ovf", ""), osType.value);
virtualSystemSections.add(osSection);

// create virtual hardware section
var vhSection = new VclVirtualHardwareSection();
vhSection.info = com.vmware.library.vCloud.common.createOvfMsg(null, "Virtual hardware requirements");
vhSection.system = new VclVSSD();
vhSection.system.elementName = new VclCimString();
vhSection.system.elementName.value = "Virtual Hardware Family";
vhSection.system.instanceID = new VclCimString();
vhSection.system.instanceID.value = "0";
vhSection.system.virtualSystemIdentifier = new VclCimString();
vhSection.system.virtualSystemIdentifier.value = virtualSystemId;
vhSection.system.virtualSystemType = new VclCimString();
vhSection.system.virtualSystemType.value = virtualSystemType;
virtualSystemSections.add(vhSection);

// create virtual hardwate items
var items = vhSection.item;
var scsiController = new VclRASD();
scsiController.address = new VclCimString();
scsiController.address.value = "0";
scsiController.description = new VclCimString();
scsiController.description.value = "SCSI Controller";
scsiController.elementName = new VclCimString();
scsiController.elementName.value = "SCSI Controller 0";
scsiController.instanceID = new VclCimString();
scsiController.instanceID.value = "1";
scsiController.resourceType = new VclResource();
scsiController.resourceType.value = "6";
scsiController.resourceSubType = new VclCimString();
scsiController.resourceSubType.value = "lsilogic";
items.add(scsiController);

var cpu = new VclRASD();
cpu.allocationUnits = new VclCimString();
cpu.allocationUnits.value = "hertz * 10^6";
cpu.description = new VclCimString();
cpu.description.value = "Number of Virtual CPUs";
cpu.elementName = new VclCimString();
cpu.elementName.value = "1 virtual CPU(s)";
cpu.instanceID = new VclCimString();
cpu.instanceID.value = "2";
cpu.reservation = new VclCimUnsignedLong();
cpu.reservation.value = VclMiscObjectFactory.createBigInteger(0 + '');
cpu.resourceType = new VclResource();
cpu.resourceType.value = "3";
cpu.virtualQuantity = new VclCimUnsignedLong();
cpu.virtualQuantity.value = VclMiscObjectFactory.createBigInteger(1 + '');
cpu.weight = new VclCimUnsignedInt();
cpu.weight.value = 1000;
items.add(cpu);

var memory = new VclRASD();
memory.allocationUnits = new VclCimString();
memory.allocationUnits.value = "byte * 2^20";
memory.description = new VclCimString();
memory.description.value = "Memory Size";
memory.elementName = new VclCimString();
memory.elementName.value = memorySizeMB + " MB of memory";
memory.instanceID = new VclCimString();
memory.instanceID.value = "3";
memory.reservation = new VclCimUnsignedLong();
memory.reservation.value = VclMiscObjectFactory.createBigInteger(0 + '');
memory.resourceType = new VclResource();
memory.resourceType.value = "4";
memory.virtualQuantity = new VclCimUnsignedLong();
memory.virtualQuantity.value = VclMiscObjectFactory.createBigInteger(memorySizeMB + '');
memory.weight = new VclCimUnsignedInt();
memory.weight.value = 320;
items.add(memory);

var content = new VclAbstractObject();
content.setValue(virtualSystem);
envelope.content = content;

return envelope;
}
}
